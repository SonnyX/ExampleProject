
### Build ###
FROM node:14.17.1-alpine as build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build --output-path=dist

### Publish ###
FROM nginx:1.19.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /app
EXPOSE 80
CMD ["/bin/sh",  "-c",  "envsubst < /app/assets/js/config.template.js > /app/assets/js/config.js && exec nginx -g 'daemon off;'"]
