const express = require("express");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

const userManagement = require("./modules/UserManagement");
const commentManagement = require("./modules/CommentManagement");

const app = express();
const port = process.env.RI_BACKEND_PORT || 8080;

const notFoundStatusCode = require("./config.json").statusCodes.notFoundCode;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});

app.post("/user/register", jsonParser, (req, res) => {
  let userId = userManagement.register(req.body);
  userManagement.setCookie(res);
  res.send({
    userId: userId   
  });
});

app.put("/user/favorite", jsonParser, (req, res) => {
  let success = userManagement.addFavorite(req.body);
  if(success) {
    res.send();
  } else {
    res.send(notFoundStatusCode);
  }
});

app.get("/user/most-visited", (req) => {
  let maxKey = userManagement.getMostVisitedPage(req.query.userId, res);
  if(maxKey) {
    res.send({
      content: maxKey,
    });
  } else {
    res.send(notFoundStatusCode);
  }
});

app.post("/user/most-visited", jsonParser, (req, res) => {
  let success = userManagement.visitedPage(req.body, res);
  if(success) {
    res.send();
  } else {
    res.send(notFoundStatusCode);
  }
});

app.get("/user/favorite", (req, res) => {
  let favorites = userManagement.getFavorites(req.query.userId, res);
  if(favorites){
    res.send({
      favorites: favorites,
    });
  } else {
    res.send(notFoundStatusCode);
  }
});

app.delete("/user/favorite", jsonParser, (req, res) => {
  let success = userManagement.deleteFavorite(req.body, res);
  if(success) {
    res.send();
  } else 
  res.send(notFoundStatusCode);
});

app.delete("/user/logout", (req, res) => {
  res.clearCookie("session");
  res.send();
});

app.post("/user/login", jsonParser, (req, res) => {
  let user = userManagement.login(req.body);
  if (!user) {
    res.send(notFoundStatusCode);
  } else {
    userManagement.setCookie(res);
    res.send({
        userId: user.userId,
    });
  }
});

app.post("/comment", jsonParser, (req, res) => {
  commentManagement.addComment(req.body);
  res.send();
});

app.get("/comment", (req, res) => {
  res.send({
      comments: commentManagement.getComments(req.query.origin)
    });
});