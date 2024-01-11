# PREPARE STAGE
FROM node:20 AS prepare

ARG environment=local

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package*.json tsconfig*.json index.html /app/
COPY environments/.env.${environment} /app/.env


RUN \
  --mount=type=cache,target=/usr/local/share/.cache/yarn/v6 \
  set -eux \
  && yarn install

FROM prepare AS development

EXPOSE 5173
CMD ["yarn", "start"]

FROM prepare AS build
RUN \
  --mount=type=cache,target=/usr/local/share/.cache/yarn/v6 \
  set -eux \
  && yarn build
# CMD ["tail", "-f", "/dev/null"]

FROM nginx:1.21-alpine
COPY --from=build /app/dist /usr/share/nginx/html/
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
