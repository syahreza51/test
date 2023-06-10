import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchData } from "../../actions";
import { RootState, AppAction } from "../../types";
import { Input, Skeleton } from "antd";
import "./style.scss";

const ItemCard = React.lazy(() => import("../ItemCard"));

const { Search } = Input;

const ArticleSearch: React.FC = () => {
  const dispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AppAction>>();

  const handleSearch = async (value: string) => {
    try {
      const payload = {
        q: value,
      };
      await dispatch(fetchData(payload));
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={handleSearch}
        enterButton
      />
      <Suspense fallback={<Skeleton active />}>
        <ItemCard />
      </Suspense>
    </div>
  );
};

export default ArticleSearch;
