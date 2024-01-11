# PREPARE STAGE
FROM node:16 AS prepare

ARG environment

# Install frontend app in required location
ENV FRONTEND_BUILD_LOC=/app/frontend
WORKDIR ${FRONTEND_BUILD_LOC}
COPY frontend/* ${FRONTEND_BUILD_LOC}
COPY environments/.env.${environment} ${FRONTEND_BUILD_LOC}/.env

RUN npm install

FROM prepare AS development

EXPOSE 3000
CMD ["npm", "start"]

FROM prepare AS build
WORKDIR ${FRONTEND_BUILD_LOC}
RUN npm run build

FROM nginx:1.21-alpine
COPY --from=build ${FRONTEND_BUILD_LOC}/build /usr/share/nginx/html/
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
