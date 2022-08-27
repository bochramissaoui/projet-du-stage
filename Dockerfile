# stage 1
#FROM node:14-alpine as node
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/relead-front /usr/share/nginx/html

# Expose the port the app runs in
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]