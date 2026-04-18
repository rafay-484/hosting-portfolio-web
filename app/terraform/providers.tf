terraform {
  required_version = ">= 1.0.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # NOTE: To use S3 backend, you must FIRST create the bucket and DynamoDB table
  # manually or in a separate terraform state.
  # Uncomment the block below AFTER the bucket is created.
  /*
  backend "s3" {
    bucket         = "my-portfolio-terraform-state-bucket"   # Replace with your unique bucket name
    key            = "portfolio/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    # dynamodb_table = "terraform-lock"                      # Optional: For state locking
  }
  */
}

provider "aws" {
  region = var.aws_region
}
