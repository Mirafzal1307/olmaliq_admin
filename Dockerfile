FROM node as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package* yarn.lock ./
COPY tsconfig.json ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]