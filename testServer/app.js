const express = require("express");
const cookieParser = require("cookie-parser");
const url = require("url");
const cors = require("cors");
const { test, getUserData, getAccessToken } = require("./getToken");
const { access } = require("fs");
const { default: axios } = require("axios");
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
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
// Redirect url
app.get("/api/get-token", async function (req, res) {
  const code = url.parse(req.url).query.substr(5);

  let token = await getAccessToken("https://api.intra.42.fr/oauth/token", code);
  let userData = await getUserData("https://api.intra.42.fr/v2/me", token.access_token);
  res.cookie("userName", userData.login);
  console.log("생성된 액세스토큰", token);
  return res.redirect(302, `http://localhost:3000/jobposts?at=${token.access_token}`);
});

app.get("/tokenCheck", async (req, res) => {
  // token expired check
  const accessToken = req.query.token;
  console.log("/tokenCheck", accessToken);
  const response = await axios.get("https://api.intra.42.fr/v2/oauth/token/info", {
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + accessToken,
    },
  });
  const { expires_in_seconds } = response.data;
  console.log(expires_in_seconds);
  if (expires_in_seconds > 3600) {
    // 만료시간 특정시간 시간 이상일 때, 재발급여부 확인
    console.log("return");

    return res.json({ isUpdatedToken: false });
  } else {
    console.log("true");

    return res.json({ isUpdatedToken: true });
    // 이하면 재발급 ?
  }
});
app.get("/cadets", async (req, res) => {
  const accessToken = req.query.token;
  const userData = await getUserData("https://api.intra.42.fr/v2/me", accessToken);
  const { id, login, email, image_url } = userData;
  console.log(userData);

  return res.json({ id: id, intra: login, email: email, image: image_url });
});

app.get("/users", async (req, res) => {
  const accessToken = url.parse(req.url).query.substr(6);
  console.log("파라미터로 받은 액세스토큰", accessToken);

  if (accessToken === "null") return;
  console.log("/user", accessToken);
  let userData = await getUserData("https://api.intra.42.fr/v2/me", accessToken);
  console.log("userName is", userData?.login);
  return res.json({ ok: true, userName: userData?.login });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
