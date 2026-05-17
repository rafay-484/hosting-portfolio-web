#!/bin/bash
# Log all output to standard log file
exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1

echo "Starting deployment setup..."

# 1. Update the system and install dependencies (Git, Node.js)
dnf update -y
dnf install -y git

# Amazon Linux 2023 installs Node.js directly from the package manager nicely
dnf install -y nodejs npm

# 2. Redirect port 80 traffic to port 3000 where the Express app listens
# This allows users to test the website by simply visiting http://YOUR_EC2_PUBLIC_IP without typing :3000
echo "Setting up iptables port forwarding from 80 to 3000..."
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000
# Save the iptables state so it persists across reboots
iptables-save > /etc/sysconfig/iptables

# 3. Pull the application code
echo "Cloning the repository ${github_repo_url}..."
# In a real environment, you might use a secure SSH key to clone, or a public repository.
# Ensure your repository URL is publicly accessible or has a read-only token attached.
cd /home/ec2-user
git clone ${github_repo_url} portfolio-app

# Ensure correct permissions
chown -R ec2-user:ec2-user portfolio-app

# 4. Install dependencies and start the app using PM2
echo "Installing NPM dependencies and PM2..."
cd portfolio-app/app
# We run npm as ec2-user, not root, for better security
sudo -u ec2-user npm install

echo "Starting the application with PM2 process manager..."
npm install -g pm2
sudo -u ec2-user pm2 start index.js --name "portfolio-web"
# Ensure PM2 starts on boot
env PATH=$PATH:/usr/bin pm2 startup systemd -u ec2-user --hp /home/ec2-user
sudo -u ec2-user pm2 save

echo "Deployment complete! App is running on port 3000 (accessible via port 80)."
