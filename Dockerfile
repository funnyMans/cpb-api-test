# Use an official Node.js runtime as a parent image
FROM node:latest

WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install development dependencies
RUN npm install -g nodemon
RUN npm install 

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application in development mode

CMD ["npm", "run", "dev"]