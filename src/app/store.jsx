import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";
import savedReducer from "../features/news/newsSlice";
import searchReducer from "../features/news/newsSlice";
import logger from "redux-logger";
import React from "react";

export const store = configureStore({
  reducer: {
    articles: newsReducer,
    saved: savedReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
