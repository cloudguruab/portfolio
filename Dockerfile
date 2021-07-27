FROM node:12.18.1

LABEL org.opencontainers.image.source=https://github.com/cloudguruab/portfolio

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app #npm start for production
CMD "npm" "run" "dev" 