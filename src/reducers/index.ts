import { combineReducers, Reducer } from "redux";
import { AppAction } from "../types";

interface DataState {
  loading: boolean;
  data: any;
  error: any;
}

const initialDataState: DataState = {
  loading: false,
  data: null,
  error: null,
};

const dataReducer: Reducer<DataState, AppAction> = (
  state = initialDataState,
  action
) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
