const bcrypt = require("bcrypt");
const User = require("../models/user");
module.exports = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          req.session.userId = user._id;
          // if passwords match
          // store user session, will talk about it later

          //configure the landing page after login.
          // res.send("working")
          res.redirect("/");
        } else {
          res.redirect("/");
        }
      });
    } else {
      res.redirect("/");
    }
  });
};
