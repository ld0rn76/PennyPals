FROM node:22-alpine
# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json
# where avaiable (npm@5+)
COPY package*.json ./

RUN npm install 

# Bundle app source
COPY . .
CMD [ "node" , "src/app.js" ]
EXPOSE 3000