FROM node:14.18.1-alpine3.13
WORKDIR /

RUN apk add --no-cache git
RUN git clone https://github.com/SarahIsWeird/rubiksinfo
WORKDIR /rubiksinfo/frontend
RUN npm install
EXPOSE 8080
CMD ["npm","start"]