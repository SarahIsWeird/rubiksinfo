const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jsonParser = bodyParser.json();

const userManagement = require("./modules/UserManagement");
const commentManagement = require("./modules/CommentManagement");
const sessionManagement = require("./modules/SessionManagement");

const app = express();
const port = process.env.RI_BACKEND_PORT || 8080;

app.use(cookieParser());

const notFoundStatusCode = require("./config.json").statusCodes.notFoundCode;
const conflictCode = require("./config.json").statusCodes.conflictCode;
const notAuthorizedCode = require("./config.json").statusCodes.notAuthorized;

function isAuthenticated(req, res, next) {
  const userId = sessionManagement.getUserId(req.cookies.session);
  if (userId) {
    req.body.sessionId = req.cookies.session;
    req.body.userId = userId;
    next();
  } else {
    res.status(notAuthorizedCode);
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
  const userId = userManagement.addUser(req.body);
  if (userId) {
    const sessionId = sessionManagement.addSession(res, userId);
    res.send({ sessionId: sessionId });
  } else {
    res.status(conflictCode);
    res.send();
  }
});

app.post("/auth/login", (req, res) => {
  const user = userManagement.getUserByName(req.body.name);
  if (user) {
    const sessionId = sessionManagement.addSession(res, user.userId);
    res.send({
      sessionId: sessionId,
    });
  } else {
    res.status(notFoundStatusCode);
    res.send();
  }
});

app.delete("/auth/logout", (req, res) => {
  sessionManagement.removeSession(req.body.sessionId, res);
  res.send();
});

app.put("/user/favorite", (req, res) => {
  const success = userManagement.addFavorite(req.body);
  if (success) {
    res.send();
  } else {
    res.send(notFoundStatusCode);
  }
});

app.get("/user/most-visited", (req, res) => {
  const mostVisited = userManagement.getMostVisitedPage(req.body.userId);
  if (mostVisited) {
    res.send({
      "most-visited": mostVisited,
    });
  } else {
    res.send(notFoundStatusCode);
  }
});

app.post("/user/most-visited", (req, res) => {
  const success = userManagement.visitedPage(req.body);
  if (success) {
    res.send();
  } else {
    res.send(notFoundStatusCode);
  }
});

app.get("/user/favorite", (req, res) => {
  const favorites = userManagement.getFavorites(req.body.userId, res);
  if (favorites) {
    res.send({
      favorites: favorites,
    });
  } else {
    res.send(notFoundStatusCode);
  }
});

app.delete("/user/favorite", (req, res) => {
  const success = userManagement.removeFavorite(req.body);
  if (success) {
    res.send();
  } else {
    res.send(notFoundStatusCode);
  }
});

app.post("/comment", (req, res) => {
  const user = userManagement.getUserById(req.body.userId);
  commentManagement.addComment(req.body, user.name);
  res.send();
});

app.get("/comment", (req, res) => {
  const comments = commentManagement.getComments(req.query.origin);
  if (comments) {
    res.send({
      comments: comments,
    });
  } else {
    res.send(notFoundStatusCode);
  }
});
