FROM node:14.18.1-alpine3.13
WORKDIR /

RUN apk add --no-cache git
RUN git clone https://github.com/SarahIsWeird/rubiksinfo
WORKDIR /rubiksinfo
RUN git checkout docker
RUN npm install
EXPOSE 8080
CMD ["npm","start"]

#Docker Befehle sind dem README des Git-Repositorys oder der Dokumentation zu entnehmen.