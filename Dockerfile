#FROM node as builder

# Create app directory
#WORKDIR /usr/src/app

# Install app dependencies
#COPY package* yarn.lock ./
#COPY tsconfig.json ./
#RUN yarn install --frozen-lockfile

#COPY . .

#EXPOSE 3000
#CMD [ "yarn", "start" ]


#FROM node:16-alpine3.14
FROM node:latest
WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package*.json ./
COPY tsconfig.json ./
# Install all Packages
RUN yarn install
# Copy all other source code to work directory
ADD . /usr/src/app
# TypeScript
# RUN npm run tsc
# Start
EXPOSE 2003
CMD [ "npm", "start" ]
# set Docker port
