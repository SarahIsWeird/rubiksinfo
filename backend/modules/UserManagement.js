const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cookieParser());

var userList = [];
const sessions = [];

function register(req) {
    var visits = {
        geschichte: 0,
        arten: 0,
        loesen: 0,
    }

    var userId = uuidv4();

    var user = {
        userId: userId,
        name: req.name,
        passwordHash: req.passwordHash,
        visits: visits,
        favorites: [],
    }

    userList.push(user);
    return userId;
}

function login(req) {
    return userList.find(user => user.name === req.name && user.passwordHash === req.passwordHash);
}

function setCookie(res) {
    const sessionId = uuidv4();
    sessions.push(sessionId);
    const cookieParameters = {
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
    res.cookie("session", sessionId, cookieParameters);
}
module.exports = {register, login, setCookie};