const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

const comments = [];

function addComment(req) {
  let comment = { creationDate: new Date(), commentId: uuidv4(), ...req };
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
