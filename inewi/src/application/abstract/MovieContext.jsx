import { atom } from "recoil";

export const movieListState = atom({
  key: "movieListState",
  default: {
    results: [],
    favorite: [],
    toWatch: [],
    filters: "",
    sort: "",
  },
});

export const genreListState = atom({
  key: "genreListState",
  default: [],
});
