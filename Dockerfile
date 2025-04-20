FROM node:18-alpine as build

# Add bash to the image
RUN apk add --no-cache bash

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Development stage
FROM build as development
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

# Production stage
FROM build as production
ENV NODE_ENV=production
CMD ["npm", "start"]