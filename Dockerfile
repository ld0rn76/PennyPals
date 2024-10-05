FROM node:22-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy app source code
COPY . .

# Expose the port
EXPOSE 3000

# Use nodemon to monitor file changes and run the app
CMD ["nodemon", "src/server.js"]