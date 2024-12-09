FROM nginx:latest

# Copy the HTML file to the Nginx default directory
COPY ./frontend/index.html /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
