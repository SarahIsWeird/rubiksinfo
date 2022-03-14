const express = require('express');

const userManagement = require("./modules/UserManagement");
const commentManagement = require("./modules/CommentManagement");

const app = express();
const port = 8080;

app.listen(8080, () => {
    console.log(`Listening on http://localhost:${port}/`);
});

app.post("/user/register", (req, res) => {
    let userId = userManagement.register(req);
    res.send(userId);
});