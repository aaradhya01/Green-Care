// const bcrypt = require("bcrypt");
const User = require("../models/user");
module.exports = (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  User.findOne({ username: username }, (error, user) => {
    console.log(user);
    if (user && user.password == password) {
      req.session.userId = user._id;
      res.send(req.session.userId);
    }

    // if (user) {
    //   bcrypt.compare(password, user.password, (error, same) => {
    //     if (same) {
    //       req.session.userId = user._id;
    //       res.send(req.session.userId);
    //       // if passwords match
    //       // store user session, will talk about it later

    //       //configure the landing page after login.
    //       // res.send("working")
    //     } else {
    //       res.redirect("/");
    //     }
  });
};
