const express = require("express");
const { v4: uuidv4 } = require("uuid");

//const userManagement = require("./UserManagement");

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
  console.log(comments)
}

function getComments(origin) {
  let pageComments = [];
  for (let comment of comments) {
    if (comment.origin === origin) {
      pageComments.push({...comment});
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
