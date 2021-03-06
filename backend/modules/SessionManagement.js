const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cookieParser());

const sessions = [];

function addSession(res, userId) {
  const sessionId = uuidv4();
  sessions.push({ sessionId: sessionId, userId: userId });
  const cookieParameters = {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  };
  res.cookie("session", sessionId, cookieParameters);
  return sessionId;
}

function removeSession(sessionId, res) {
  const sessionIndex = sessions.findIndex(
    (session) => session.sessionId === sessionId
  );
  sessions.splice(sessionIndex, 1);
  res.clearCookie("session");
}

function getUserId(sessionId) {
  const session = sessions.find((session) => session.sessionId === sessionId);
  return session ? session.userId : undefined;
}

module.exports = {
  addSession,
  removeSession,
  getUserId,
};
