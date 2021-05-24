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
  return res.json({ id: id, intra: login, email: email, image: image_url });
});

app.get("/users", async (req, res) => {
  const accessToken = url.parse(req.url).query.substr(6);

  if (accessToken === "null") return;
  let userData = await getUserData("https://api.intra.42.fr/v2/me", accessToken);
  return res.json({ ok: true, userName: userData?.login });
});

app.get("/bookmarks", async (req, res) => {
  const userId = req.query.userId;
  return res.json([
    {
      id: 1,
      jobpostId: 1,
    },
    {
      id: 2,
      jobpostId: 3,
    },
  ]);
});

app.get("/bookmarkslist", async (req, res) => {
  const userId = req.query.userId;
  return res.json({
    content: [
      {
        id: 1,
        title: "쩦 개발자 모십니다.",
        dueDate: "2021-06-08",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "프론트엔드",
      },
      {
        id: 2,
        title: "2쩦 개발자 모십니다.",
        dueDate: "2021-06-03",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "프론트엔드",
      },
      {
        id: 3,
        title: "3쩦 개발자 모십니다.",
        dueDate: "2021-05-01",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "프론트엔드",
      },
      {
        id: 4,
        title: "4쩦 개발자 모십니다.",
        dueDate: "2021-06-23",
        isClosed: false,
        tag: ["WEB", "iOS", "DB"],
        type: "프론트엔드",
      },
    ],
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
