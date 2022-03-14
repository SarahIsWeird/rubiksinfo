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
        password: req.password,
        visits: visits,
        favorites: [],
    }

    userList.push(user);
    return userId;
}
module.exports = {register};