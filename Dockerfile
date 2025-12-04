# Use official Node LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source
COPY . .

# Expose Render port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]