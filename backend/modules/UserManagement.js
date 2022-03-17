const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cookieParser());

const userNotFoundStatusCode = 404;
//require("../index").userNotFoundStatusCode

var userList = [];

function getUserById(userId) {
  return userList.find((user) => user.userId === userId);
}

function getUserByName(username) {
  return userList.find((user) => user.name === username);
}

function addUser(req) {
  const userExists = userList.find((user) => user.name === req.name);
  if (userExists) {
    return undefined;
  }

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

function addFavorite(req, res) {
  let user = userList.find((user) => user.userId === req.userId);
  if (!user) {
    res.status(userNotFoundStatusCode);
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

function removeFavorite(req, res) {
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
  getFavorites,
  addFavorite,
  addUser,
  getUserById,
  getUserByName,
  deleteFavorite: removeFavorite,
  getMostVisitedPage,
  visitedPage,
};
