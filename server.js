const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for the replace property to work.
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const mongoose = require("mongoose");
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful!"));

const expressSession = require("express-session");
app.use(
  expressSession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

// const cors = require("cors");
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// const cookieParser = require("cookie-parser");
// app.use(cookieParser);

global.loggedIn = null;
app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});

const flash = require("connect-flash");
app.use(flash());

// const fileUpload = require("express-fileupload");
// app.use(fileUpload());

const Post = require("./models/post.js");
app.get("/api/allPost", async (req, res) => {
  // const allPost = await Post.find({}, populate("userid"))
  const allPost = await Post.find({});
  console.log(req.session);
  res.send({ allpost });
});

const Plant = require("./models/plant");
app.get("/api/allPlant", async (req, res) => {
  const allPlant = await Plant.find({});
  console.log(allPlant);
  res.send({ allPlant });
});

const login = require("./server/loginUser");
app.post("/api/login", login);

const logout = require("./server/logoutUser");
app.get("/api/logout", logout);

const newUser = require("./server/newUser");
app.post("/api/newUser", newUser);

// const plt = require("./models/insertPlant");
// plt();

// app.get("/api/hello", (req, res) => {
//   res.send({ express: "Hello From Express" });
// });

// app.post("/api/world", (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`
//   );
// });

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  // app.use(express.static(path.join(__dirname, "client/build")));
  app.use(express.static(path.join(__dirname, "data")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
