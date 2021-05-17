const express = require("express");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const url = require("url");
const { test, getUserData, getAccessToken } = require("./getToken");
// const session = require("express-session");
const app = express();
const port = 5000;
// app.use(session({
//   secret: 'apple',
//   resave: false,
//   saveUninitialized: true
//  }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Redirect url
app.get("/api/get-token", async function (req, res) {
  const code = url.parse(req.url).query.substr(5);

  let token = await getAccessToken("https://api.intra.42.fr/oauth/token", code);
  let userData = await getUserData("https://api.intra.42.fr/v2/me", token);
  res.cookie("userName", userData.login);
  return res.redirect(302, "http://localhost:3000/jobposts");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
