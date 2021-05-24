import { atom } from "recoil";
import { USER_INFO_ATOM_KEY, USER_BOOKMARK_ATOM_KEY } from "../../util/constants/atomKey";

export const userInfoAtom = atom({
  key: USER_INFO_ATOM_KEY,
  default: {
    id: null,
    intra: null,
    email: null,
    image: null,
  },
});

export const userBookmarkAtom = atom({
  key: USER_BOOKMARK_ATOM_KEY,
  default: {
    content: [],
  },
});
