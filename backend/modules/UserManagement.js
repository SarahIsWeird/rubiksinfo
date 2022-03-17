const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cookieParser());

const userList = [];

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

  const userId = uuidv4();

  const user = {
    userId: userId,
    name: req.name,
    passwordHash: req.passwordHash,
    visits: {},
    favorites: [],
  };

  userList.push(user);
  return userId;
}

function addFavorite(req) {
  const user = userList.find((user) => user.userId === req.userId);
  if (!user) {
    return false;
  } else {
    user.favorites.push(req.content);
    return true;
  }
}

function getFavorites(userId) {
  const user = userList.find((user) => user.userId === userId);
  if (!user) {
    return undefined;
  } else {
    return user.favorites;
  }
}

function removeFavorite(req) {
  const user = userList.find((user) => user.userId === req.userId);
  if (!user) {
    return false;
  } else {
    const favorite = user.favorites.find((fav) => fav === req.content);
    if (favorite) {
      favIndex = user.favorites.indexOf(favorite);
      user.favorites.splice(favIndex, 1);
      return true;
    } else {
      return false;
    }
  }
}

function getMostVisitedPage(userId) {
  const user = userList.find((user) => user.userId === userId);
  if (!user) {
    return false;
  }

  const mostVisited = Object.entries(user.visits).reduce(
    (prev, curr) => (curr[1] > prev[1] ? curr : prev),
    [null, -1]
  )[0];

  return mostVisited ? mostVisited : false;
}

function visitedPage(req) {
  const user = userList.find((user) => user.userId === req.userId);

  if (!user) {
    return false;
  }

  if (!user.visits[req.content]) {
    user.visits[req.content] = 0;
  }

  user.visits[req.content] += 1;
  return true;
}

module.exports = {
  getFavorites,
  addFavorite,
  addUser,
  getUserById,
  getUserByName,
  removeFavorite,
  getMostVisitedPage,
  visitedPage,
};
