# Get the latest Amazon Linux 2023 AMI
data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-2023.*-x86_64"]
  }
}

# Create an SSH Key Pair so you can log into the instance (Optional but recommended)
# You should run `ssh-keygen -t rsa -b 2048 -f ~/.ssh/portfolio_key` on your local machine first
# Or remove the key_name parameter to use SSM (Systems Manager).
resource "aws_key_pair" "deployer" {
  key_name   = "${var.project_name}-deployer-key"
  public_key = fileexists("~/.ssh/id_rsa.pub") ? file("~/.ssh/id_rsa.pub") : "" 
  # Note: Create a generic dummy key pair or provide your actual SSH public key!
}

# The EC2 Instance
resource "aws_instance" "web" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = var.instance_type
  subnet_id     = aws_subnet.public.id
  
  vpc_security_group_ids = [aws_security_group.web_sg.id]

  # Only attach a key pair if a public key was loaded
  key_name = aws_key_pair.deployer.public_key != "" ? aws_key_pair.deployer.key_name : null

  # The bash script to auto-provision the instance and install the Node app
  user_data = templatefile("${path.module}/userdata.sh", {
    github_repo_url = var.github_repo_url
  })

  # Optional IAM Instance Profile if we needed S3 access from the app natively
  # iam_instance_profile = aws_iam_instance_profile.web_profile.name

  tags = {
    Name = "${var.project_name}-web-server"
  }
}
