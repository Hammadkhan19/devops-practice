# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for efficient dependency installation
COPY package*.json ./

# Install app dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Inform Docker the container listens on port 3000
EXPOSE 3000

# Define the command to run the app
CMD [ "npm", "start" ]