FROM node:10

# make the 'app' folder the current working directory
WORKDIR /

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minificationbash8dbd9e392a96
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
