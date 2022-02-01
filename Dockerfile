FROM node:14.18.1-alpine3.13
WORKDIR /

COPY package.json .
RUN npm install
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm","start"]

#Docker Befehle sind dem README des Git-Repositorys zu entnehmen.