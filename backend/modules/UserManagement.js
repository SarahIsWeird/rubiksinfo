const { v4: uuidv4 } = require('uuid');

var userList = [];

function register(req) {
    var visits = {
        geschichte: 0,
        arten: 0,
        loesen: 0,
    }

    var userId = uuidv4();

    var user = {
        userId: userId,
        name: req.name,
        passwordHash: req.passwordHash,
        visits: visits,
        favorites: [],
    }

    userList.push(user);
    return userId;
}

function login(req) {
    return userList.find(user => user.name === req.name && user.passwordHash === req.passwordHash);
}
module.exports = {register, login};