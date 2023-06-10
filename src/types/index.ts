// types.ts
import { Action } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Article {
  _id: string;
  title: string;
  headline: {
    main: string;
    print_headline: string;
  };
  byline: {
    organization: null;
    original: string;
  };
  pub_date: string;
  web_url: string;
  lead_paragraph: string;
}

export interface RootState {
  // Definisi state aplikasi
  articles?: {
    data: any;
    loading: boolean;
    error: any;
  };
}

export interface AppAction extends Action {
  payload?: any;
  error?: any;
}

export interface DataState {
  loading: boolean;
  data: [];
  error: any;
}

const initialState: DataState = {
  loading: false,
  data: [],
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    fetchDataFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;
export default dataSlice.reducer;
