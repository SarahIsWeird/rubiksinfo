const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

const comments = [];

function addComment(req, username) {
  let comment = {
    commentId: uuidv4(),
    userId: req.userId,
    username: username,
    text: req.text,
    creationDate: new Date(),
    origin: req.origin,
  };
  comments.push(comment);
}

function getComments(origin) {
  let correctPageComments = [];
  for (comment of comments) {
    if (comment.origin === origin) {
      correctPageComments.push(comment);
    }
  }
  return correctPageComments;
}

module.exports = {
  addComment,
  getComments,
};
