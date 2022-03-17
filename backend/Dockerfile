FROM node:14.18.1-alpine3.13
WORKDIR /

RUN apk add --no-cache git
RUN git clone https://github.com/SarahIsWeird/rubiksinfo
WORKDIR /rubiksinfo/backend
RUN npm install
EXPOSE 8150
CMD ["npm","start"]