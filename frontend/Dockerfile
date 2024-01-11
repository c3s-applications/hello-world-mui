# PREPARE STAGE
FROM node:20 AS prepare

ARG environment=local

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package*.json /app/
COPY environments/.env.${environment} /app/.env

RUN yarn install

FROM prepare AS development

EXPOSE 3000
CMD ["yarn", "start"]

FROM prepare AS build
RUN yarn build

FROM nginx:1.21-alpine
COPY --from=build /app/build /usr/share/nginx/html/
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
