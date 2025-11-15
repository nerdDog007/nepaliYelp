# Use official Node.js image
FROM node:latest

# Set working directory inside container
WORKDIR /home/app

# Copy all files from current folder to container
COPY . .

# Install dependencies
RUN npm install

# Expose your app port (optional)
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
