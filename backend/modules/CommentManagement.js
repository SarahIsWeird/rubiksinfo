const express = require("express");
const { v4: uuidv4 } = require("uuid");

const userManagement = require("./UserManagement");

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
      const commentObject = {
        ...comment,
        username: userManagement.getUsernameByUserId(comment.userId),
      }
      correctPageComments.push(commentObject);
    }
  }
  return correctPageComments;
}

module.exports = {
  addComment,
  getComments,
};
