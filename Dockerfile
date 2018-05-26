FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./
RUN npm run installation
COPY . ./
# RUN yarn build

EXPOSE 5000
CMD [ "npm", "start" ]
    