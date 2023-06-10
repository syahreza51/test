import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../actions";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  data: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  data: [],
  loading: false,
  error: null,
};

const articlesReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.data = [];
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.response.docs;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message || "Failed to fetch todos";
      });
  },
});

export default articlesReducer.reducer;
