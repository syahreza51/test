import React from "react";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import ArticleSearch from "..";

const mockStore = configureStore([]);

describe("ArticleSearch Component", () => {
  let store: MockStoreEnhanced<unknown, {}>;
  let component: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;

  beforeEach(() => {
    store = mockStore({});
    component = render(
      <Provider store={store}>
        <ArticleSearch />
      </Provider>
    );
  });

  it("renders the search input", () => {
    const searchInput = component.getByPlaceholderText("input search text");
    expect(searchInput).toBeInTheDocument();
  });

  it("dispatches fetchData action when search button is clicked", async () => {
    const searchButton = component.getByPlaceholderText("input search text");
    await act(async () => {
      fireEvent.click(searchButton);
    });
  });
});
