FROM node:22
# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json
# where avaiable (npm@5+)
COPY package*.json ./

RUN npm install 

# Bundle APP source
COPY . .
EXPOSE 3000
CMD [ "node" , "src/app.js" ]
