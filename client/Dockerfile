# Base image
FROM node:18.17.1-alpine

# install expo and global
RUN npm i -g expo-cli@latest serve 

# Create app directory
WORKDIR /client

# COPY package.json and package-lock.json files
COPY package*.json ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .

VOLUME /data

# Install app dependencies
RUN npm install

# Creates a "dist" folder with the production build
RUN npx expo export --platform web

# Build the app for production
#RUN npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios/assets
#RUN npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

#Expose Port
EXPOSE 3000

# Start the server using the production build
CMD [ "npx", "serve", "dist" ]