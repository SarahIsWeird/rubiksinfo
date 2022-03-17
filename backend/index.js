const express = require("express");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var jsonParser = bodyParser.json();

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
  let userId = sessionManagement.getUserId(req.cookies.session);
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
  let userId = userManagement.addUser(req.body);
  if (userId) {
    let sessionId = sessionManagement.addSession(res, userId);
    res.send({ sessionId: sessionId });
  } else {
    res.status(conflictCode);
    res.send();
  }
});

app.post("/auth/login", (req, res) => {
  let user = userManagement.getUserByName(req.body.name);
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

app.post("/user/favorite", (req, res) => {
  userManagement.addFavorite(req.body, res);
  res.send();
});

app.get("/user/most-visited", (req, res) => {
  res.send({
    "most-visited": userManagement.getMostVisitedPage(req.body.userId, res),
  });
});

app.post("/user/most-visited", (req, res) => {
  userManagement.visitedPage(req.body, res);
  res.send();
});

app.get("/user/favorite", (req, res) => {
  let favorites = userManagement.getFavorites(req.body.userId, res);
  res.send({
    favorites: favorites,
  });
});

app.delete("/user/favorite", (req, res) => {
  userManagement.removeFavorite(req.body, res);
  res.send();
});

app.post("/comment", (req, res) => {
  let user = userManagement.getUserById(req.body.userId);
  console.log(user)
  commentManagement.addComment(req.body, user.name);
  res.send();
});

app.get("/comment", (req, res) => {
  res.send({
    comments: commentManagement.getComments(req.query.origin),
  });
});
