# Base image
FROM node:18.17.1-alpine

# Create app directory
WORKDIR /server

# COPY package.json and package-lock.json files
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .

# Install app dependencies
RUN npm install

# Generate Prisma client.
RUN npx prisma generate

# Creates a "dist" folder with the production build
RUN npm run build

#Expose Port
EXPOSE 5000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]