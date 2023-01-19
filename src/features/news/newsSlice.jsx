import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const indonesia = "country=id";
const covid = "q=covid";
const programming = "q=programming";
const apiKey = "apiKey=b9d639b8ac584fc885bc58957721f783";
const pageSize = "pageSize=12";

const initialState = {
  entities: [],
  savedItems: JSON.parse(localStorage.getItem("saved")) || [],
};

export const IndonesiaNews = createAsyncThunk(
  "articles/fetchNews",
  async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?${indonesia}&from=2023-1-1&sortBy=popularity&${apiKey}&${pageSize}`
    );
    return response.data;
  }
);

export const ProgrammingNews = createAsyncThunk(
  "articles/fetchNews",
  async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?${programming}&from=2023-1-1&sortBy=popularity&${apiKey}&${pageSize}`
    );
    return response.data;
  }
);

export const CovidNews = createAsyncThunk("articles/fetchNews", async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?${covid}&from=2023-1-1&sortBy=popularity&${apiKey}&${pageSize}`
  );
  return response.data;
});

export const searchNews = createAsyncThunk(
  "search/searchNews",
  async (search) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&${apiKey}&${pageSize}`
    );
    return response.data;
  }
);

const newsSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.savedItems.unshift(action.payload);

      localStorage.setItem("saved", JSON.stringify(state.savedItems));
    },

    removeItems: (state, action) => {
      state.savedItems = state.savedItems.filter(
        (item) => item.title !== action.payload.title
      );

      localStorage.setItem("saved", JSON.stringify(state.savedItems));
    },
  },

  extraReducers(builder) {
    builder
      .addCase(IndonesiaNews.fulfilled, (state, action) => {
        state.entities = action.payload.articles;
      })
      .addCase(searchNews.fulfilled, (state, action) => {
        state.entities = action.payload.articles;
      });
  },
});

export const { addItems, removeItems } = newsSlice.actions;
export default newsSlice.reducer;
