const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

const comments = [];

function addComment(req, username) {
  const comment = {
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
  const pageComments = [];
  for (const comment of comments) {
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
