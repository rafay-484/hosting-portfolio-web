# 🚀 K8s Hosted Portfolio Website

![Kubernetes](https://img.shields.io/badge/Kubernetes-Minikube-green)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Express](https://img.shields.io/badge/Express-Node.js-black)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-orange)

## 📋 Project Overview
A fully containerized personal portfolio website running on a local Kubernetes cluster! This project represents my shift towards DevOps and Cloud Engineering. It showcases an interactive portfolio, serving a static layout orchestrated via Docker and Minikube.

### About Me
**Rafay Ahmad**  
*Computer Science Student | Lahore | Aspiring DevOps & Cloud Engineer*  
Currently in my last semester, looking for opportunities to build scalable systems, CI/CD pipelines, and cloud-native infrastructure!

## 🚀 Featured Projects Highlights
- ☁️ **AWS Static Website:** Highly available static website on AWS.
- 🔐 **CI/CD Pipeline integration:** Complete DevSecOps methodologies embedded natively.
- 📱 **AI Study Companion / Language App:** Fine-tuned XLM-RoBERTa (Urdu/Punjabi) and Gemini API integration.
- 🍊 **Citrus Disease Detection:** Gradient boosting trained on a 2000+ dataset.

## 🛠️ Technology Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| Ubuntu | 24.04 LTS | Operating System (WSL2) |
| Docker | 29.2.1 | Containerization |
| Kubernetes | v1.35.1 | Orchestration (Minikube) |
| Node.js | 18-alpine | Runtime Environment |
| Express | 4.18.2 | Web Framework |
| GitHub Actions | Latest | CI/CD Pipeline |

## 📁 Project Structure
```text
hosting-portfolio-web/
├── 📂 app/
│   ├── 📄 Dockerfile       # Instructions to build the Node.js/Express image
│   ├── 📄 index.js         # The Portfolio web application source code
│   └── 📄 package.json     # Node dependencies
├── 📂 k8s/
│   ├── 📄 deployment.yaml  # Kubernetes replicas & setup
│   └── 📄 service.yaml     # Kubernetes network routing (NodePort 3000)
├── 📂 .github/
│   └── 📂 workflows/
│       └── 📄 ci.yml       # GitHub Actions pipeline
└── 📄 README.md            # This documentation
```

## 💻 Local Development Setup

### Prerequisites
- Docker
- Minikube
- kubectl

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/rafay-484/hosting-portfolio-web.git
   cd hosting-portfolio-web
   ```

2. **Build Docker image**
   ```bash
   docker build -t portfolio-local:latest -f app/Dockerfile app/
   ```

3. **Deploy to Kubernetes**
   ```bash
   # Load image to Minikube
   minikube image load portfolio-local:latest

   # Apply Kubernetes manifests
   kubectl apply -f k8s/

   # Get application URL
   minikube service portfolio-svc --url
   ```

## 🔄 CI/CD Pipeline
The GitHub Actions workflow automatically:
✅ Validates file structure
✅ Checks Dockerfile existence
✅ Verifies Kubernetes manifests
✅ Confirms package.json dependencies

## 💻 How to Run This Project Next Time (WSL2)
If you ever restart your PC or close your terminal, follow these simple steps to spin the portfolio back up:

Navigate to project root:
```bash
cd ~/projects/hosting-portfolio-web
chmod +x start-portfolio.sh
./start-portfolio.sh
```

If Docker is not running, use:
```bash
sudo service docker start
```
Then run again:
```bash
./start-portfolio.sh
```

## 🤝 Let's Connect
Feel free to open an issue or reach out if you're hiring for DevOps and Cloud roles!
