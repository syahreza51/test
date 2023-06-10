import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import ArticleSearch from "./components/ArticleSearch";
import "antd/dist/reset.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Article Search</h1>
        <ArticleSearch />
      </div>
    </Provider>
  );
};

export default App;
