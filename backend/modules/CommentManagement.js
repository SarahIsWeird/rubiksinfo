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
  let pageComments = [];
  for (comment of comments) {
    if (comment.origin === origin) {
      const commentObject = {
        ...comment,
        username: userManagement.getUsernameByUserId(comment.userId),
      }
      pageComments.push(commentObject);
    }
  }
  if(pageComments.length > 0) {
    return pageComments;
  } else {
    return undefined;
  }

}

module.exports = {
  addComment,
  getComments,
};
