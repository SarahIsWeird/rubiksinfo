const express = require("express");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

const userManagement = require("./modules/UserManagement");
const commentManagement = require("./modules/CommentManagement");

const app = express();
const port = process.env.RI_BACKEND_PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});

app.post("/user/register", jsonParser, (req, res) => {
  let userId = userManagement.register(req.body);
  userManagement.setCookie(res);
  if (userId) {
    res.send(userId);
  } else {
    res.send(409);
  }
});

app.put("/user/favorite", jsonParser, (req, res) => {
  userManagement.addFavorite(req.body, res);
  res.send();
});

app.get("/user/most-visited", (req, res) => {
  res.send(userManagement.getMostVisitedPage(req.query.userId, res));
});

app.put("/user/most-visited", jsonParser, (req, res) => {
  userManagement.visitedPage(req.body, res);
  res.send();
});

app.get("/user/favorite", (req, res) => {
  let favorites = userManagement.getFavorites(req.query.userId, res);
  res.send(favorites);
});

app.delete("/user/favorite", jsonParser, (req, res) => {
  userManagement.deleteFavorite(req.body, res);
  res.send();
});

app.delete("/user/logout", (req, res) => {
  res.clearCookie("session");
  res.send();
});

app.post("/user/login", jsonParser, (req, res) => {
  let user = userManagement.login(req.body);
  if (!user) {
    res.status(406);
    res.send();
  } else {
    userManagement.setCookie(res);
    res.send(user.userId);
  }
});

app.post("/comment", jsonParser, (req, res) => {
  commentManagement.addComment(req.body);
  res.send();
});

app.get("/comment", (req, res) => {
  res.send(commentManagement.getComments(req.query.origin));
});
