const User = require("../models/user");

module.exports = async (req, res) => {
  console.log(req.body);
  // if (req.body.password1 == req.body.password2) {
  User.create(
    {
      username: req.body.username,
      password: req.body.password,
    },
    (error, user) => {
      console.log("this is working till here");
      if (user) {
        req.session.userId = user._id;
        console.log(req.session.userId);
        res.send(req.session.userId);
        // res.send("this is working");
      }
      if (error) {
        console.log("gets stuck here.");
        const validationErrors = Object.keys(error.errors).map(
          (key) => error.errors[key].message
        );
        // req.session.validationErrors = validationErrors;
        req.flash("validationErrors", validationErrors);
        req.flash("data", req.body);
        return res.redirect("/sign_up");
      }
    }
  );
  // } else {
  //   res.redirect("/sign_up");
  // }
};
