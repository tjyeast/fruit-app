const users = require('../models/users');

const index = (req, res) => {
    res.render('users/index.ejs');
}

const renderSignUp = (req, res) => {
    res.render('users/signup.ejs');
}

const signup = (req, res) => {
    users.push(req.body);
    res.redirect(`/users/profile/${users.length-1}`);
}

const renderLogin = (req, res) => {
    res.render('users/login.ejs');
}

const login = (req, res) => {
    let index = users.findIndex(
        (user) => user.username === req.body.username
    )
    res.redirect(`/users/profile/${index}`);
}

const showProfile = (req, res) => {
    res.render('users/profile.ejs', {
        user: users[req.params.index],
        index: req.params.index
    })
}

const editProfile = (req, res) => {
    users[req.params.index] = req.body;
    res.redirect(`/users/profile/${req.params.index}`);
}

const deleteUser = (req, res) => {
    users.splice(req.params.index, 1);
    res.render('users/index.ejs');
}

module.exports = {
    index,
    renderSignUp,
    signup,
    showProfile,
    renderLogin,
    login,
    editProfile,
    deleteUser
}