// const mongoose = require("mongoose");
const Plant = require("./plant");

module.exports = async (req, res) => {
console.log("working");
Plant.create(
  {
    name: "plant1",
    content: "it's content.",
    image: "aloevera",
  },
  (error, plant) => {
    console.log("plant added.");
  }
);
};
