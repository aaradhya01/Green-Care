const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide Username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide Password"],
  },
  plants: [
    {
      plant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "plant",
        required: true,
      },
      time: Date,
    },
  ],
});

userSchema.plugin(uniqueValidator);

userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", userSchema);
module.exports = User;
