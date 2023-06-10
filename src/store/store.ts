import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;
