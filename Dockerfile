FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies (production only)
COPY package*.json ./
RUN npm install --only=production --silent

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]
