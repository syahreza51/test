import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_URL;
const key = process.env.REACT_APP_KEY;

export const fetchData = createAsyncThunk(
  "articles/fetchData",
  async (params: Record<string, any> = {}) => {
    const response = await axios.get(url + "/search/v2/articlesearch.json", {
      params: {
        ...params,
        "api-key": key,
      },
    });
    return response.data;
  }
);
