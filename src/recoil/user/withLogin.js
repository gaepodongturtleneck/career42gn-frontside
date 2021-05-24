import axios from "axios";
import { selectorFamily } from "recoil";

export const tokenWithLogin = selectorFamily({
  key: "tokenWithLogin",
  get: accessToken => async ({ get }) => {
    console.log(accessToken);
    const res = await axios.get(`http://localhost:5000/cadets?token=${accessToken}`);
    if (res.error) {
      throw res.error;
    }
    return res.data;
  },
});
