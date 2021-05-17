const axios = require("axios");
const SECRET = "7b8a25f3010772d4d7e2388efb383c0f79775767a0d6134b66dd4b2a2a339af5";
const UID = "67ce410deb2af7aa9ce7a753c6f4b1dc40296dc5c76eb65c16f3f17431c8136b";

async function getAccessToken(url, code) {
  try {
    const res = await axios.post(url, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      grant_type: "authorization_code",
      client_id: UID,
      client_secret: SECRET,
      code: code,
      scope: "public",
      redirect_uri: "http://localhost:5000/api/get-token",
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function getUserData(url, token) {
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (err) {
    console.log('getUser에러');
    
    // console.error(err);
  }
}
module.exports = {
  getAccessToken: getAccessToken,
  getUserData: getUserData,
  test: "hello",
};
