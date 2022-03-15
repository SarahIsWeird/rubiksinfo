const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cookieParser());

const userNotFoundStatusCode = require("../index").userNotFoundStatusCode;

var userList = [];
const sessions = [];

function register(req) {
  var visits = {
    geschichte: 0,
    arten: 0,
    loesen: 0,
  };

  var userId = uuidv4();

  var user = {
    userId: userId,
    name: req.name,
    passwordHash: req.passwordHash,
    visits: visits,
    favorites: [],
  };

  userList.push(user);
  return userId;
}

function login(req) {
  return userList.find(
    (user) => user.name === req.name && user.passwordHash === req.passwordHash
  );
}

function setCookie(res) {
  const sessionId = uuidv4();
  sessions.push(sessionId);
  const cookieParameters = {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  };
  res.cookie("session", sessionId, cookieParameters);
}

function addFavorite(req, res) {
  let user = userList.find((user) => user.userId === req.userId);
  if (!user) {
    res.status();
    res.send();
  } else {
    user.favorites.push(req.content);
  }
}

function getFavorites(userId, res) {
  let user = userList.find((user) => user.userId === userId);
  if (!user) {
    res.status(userNotFoundStatusCode);
    res.send();
  } else {
    return user.favorites;
  }
}

function deleteFavorite(req, res) {
  let user = userList.find((user) => user.userId === req.userId);
  if (!user) {
    res.status(userNotFoundStatusCode);
    res.send();
  } else {
    let find = user.favorites.find((fav) => fav === req.content);
    favIndex = user.favorites.indexOf(find);
    user.favorites.splice(favIndex, 1);
  }
}

function getMostVisitedPage(userId, res) {
  let user = userList.find((user) => user.userId === userId);
  if (!user) {
    res.status(userNotFoundStatusCode);
    res.send();
  } else {
    let maxKey;
    let maxValue = -1;
    for ([key, value] of Object.entries(user.visits)) {
      if (value > maxValue) {
        maxValue = value;
        maxKey = key;
      }
    }
    return maxKey;
  }
}

function visitedPage(req, res) {
  let user = userList.find((user) => user.userId === req.userId);
  if (!user) {
    res.status(userNotFoundStatusCode);
    res.send();
  } else {
    for (key of Object.keys(user.visits)) {
      if (key === req.content) {
        user.visits[key] += 1;
      }
    }
  }
}

module.exports = {
  register,
  login,
  setCookie,
  getFavorites,
  addFavorite,
  deleteFavorite,
  getMostVisitedPage,
  visitedPage,
};
