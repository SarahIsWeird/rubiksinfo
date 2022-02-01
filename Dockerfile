FROM node:14.18.1-alpine3.13
WORKDIR /

COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","start"]

#Docker Befehle sind dem README des Git-Repositorys oder der Dokumentation zu entnehmen.