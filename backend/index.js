const express = require("express");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

const userManagement = require("./modules/UserManagement");
const commentManagement = require("./modules/CommentManagement");
const authManagement = require("./modules/AuthManagement");

const app = express();
const port = process.env.RI_BACKEND_PORT || 8080;

const userNotFoundStatusCode = 404;
const userAlreadyExists = 409;
const notAuthorized = 401;

function isAuthenticated(req, res, next) {
  if (authManagement.getUserIdBySessionId(req.body.sessionId)) { // mit Cookie statt body?
    next();
  } else {
    res.status(notAuthorized);
    res.send();
  }
}

app.use(jsonParser);
app.use("/user/", isAuthenticated);
app.use("/comment/", isAuthenticated);
app.use("/auth/logout", isAuthenticated);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});

app.post("/auth/register", (req, res) => {
  let userId = userManagement.addUser(req.body);
  if (userId) {
    let sessionId = authManagement.addSession(res, userId);
    res.send({ sessionId: sessionId });
  } else {
    res.send(userAlreadyExists);
  }
});

app.post("/auth/login", (req, res) => {
  let userId = userManagement.getUser(req.body);
  if (userId) {
    authManagement.addSession(res, userId);
    res.send({
      sessionId: sessionId,
    });
  } else {
    res.status(userNotFoundStatusCode);
    res.send();
  }
});

app.delete("/auth/logout", (req, res) => {
  authManagement.removeSession(req.body.sessionId);
  res.clearCookie("session");
  res.send();
});

app.put("/user/favorite", (req, res) => {
  userManagement.addFavorite(req.body, res);
  res.send();
});

app.get("/user/most-visited", (req, res) => {
  res.send(userManagement.getMostVisitedPage(req.query.userId, res));
});

app.put("/user/most-visited", (req, res) => {
  userManagement.visitedPage(req.body, res);
  res.send();
});

app.get("/user/favorite", (req, res) => {
  let favorites = userManagement.getFavorites(req.query.userId, res);
  res.send({
    favorites: favorites,
  });
});

app.delete("/user/favorite", (req, res) => {
  userManagement.removeFavorite(req.body, res);
  res.send();
});

app.post("/comment", (req, res) => {
  commentManagement.addComment(req.body);
  res.send();
});

app.get("/comment", (req, res) => {
  res.send({
    comments: commentManagement.getComments(req.query.origin),
  });
});
