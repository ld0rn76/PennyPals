FROM node:22-alpine
# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install 

RUN npm install -g nodemon

# Bundle app source
COPY . .

# Run the app from server.js
CMD [ "nodemon", "src/server.js" ]
EXPOSE 3000
