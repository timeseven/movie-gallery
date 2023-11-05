# Base image
FROM node:18.17.1-alpine

# install expo and global
RUN npm i -g expo-cli@latest 

# Create app directory
WORKDIR /client

# COPY package.json and package-lock.json files
COPY package*.json ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .

# Install app dependencies
RUN npm install

#copy Fonts
COPY node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts ./assets/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts

# Build the app for production
#RUN npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios/assets
#RUN npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

#Expose Port
EXPOSE 8081

# Start the server using the production build
CMD [ "npm", "run", "web" ]