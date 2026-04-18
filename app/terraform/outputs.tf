output "website_public_url" {
  description = "The public URL to access the Portfolio website"
  value       = "http://${aws_instance.web.public_ip}"
}

output "website_public_ip" {
  description = "The Public IP address of the EC2 instance"
  value       = aws_instance.web.public_ip
}
