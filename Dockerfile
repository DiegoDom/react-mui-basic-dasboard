# Start from the node:18-alpine3.15 image and give it the build alias
FROM node:18-alpine3.15 AS build

# Set the working directory for subsequent commands
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Copy the entrypoint.sh script to the /entrypoint.sh path in the image
# and make it executable
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy all the files from the current directory to the working directory in the image
ADD . .

# Install the dependencies for the application
RUN yarn install

# Set the command to run when the image is run as a container
ENTRYPOINT ["/entrypoint.sh"]

# Expose the container's port 3000 to the host
EXPOSE 3000

# Set the default command to run when the image is run as a container
# CMD [ "yarn", "dev" ]

# Build the production version of the application
RUN yarn build

# Start from the nginx:1.9.15-alpine image and give it the prod-stage alias
FROM nginx:1.9.15-alpine AS prod-stage

# Copy the built assets from the build image to the /usr/share/nginx/html directory in the prod-stage image
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the nginx.conf file from the current directory to the /etc/nginx/conf.d/default.conf directory in the prod-stage image
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the container's port 80 to the host
EXPOSE 80

# Set the command to run when the image is run as a container
CMD [ "nginx", "-g", "daemon off;" ]
