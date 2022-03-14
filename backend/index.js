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
    userManagement.setCookie(res);
    res.send(userId);
});

app.post("/user/login", (req, res) => {
    let user = userManagement.login(req);
    if (!user) {
        res.status(406);
        res.send();
    } else {
        userManagement.setCookie(res);
        res.send(user.userId);
    }
});