FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN yarn install 

# Copy the application code to the container
COPY . .

# Expose the port on which the server will run
EXPOSE 3000

# Set the command to start the server
CMD [ "yarn", "start:dev" ]