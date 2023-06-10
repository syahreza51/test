import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ItemCard from "..";

const mockStore = configureStore([]);

describe("ItemCard component", () => {
  test("renders article cards correctly", () => {
    // Mocking the Redux store
    const initialState = {
      articles: {
        data: [
          {
            _id: "1",
            title: "Article 1",
            headline: {
              main: "Headline 1",
              print_headline: "Print Headline 1",
            },
            byline: {
              organization: null,
              original: "Byline 1",
            },
            pub_date: "2023-06-01",
            web_url: "https://example.com/article1",
            lead_paragraph: "Lead paragraph 1",
          },
          {
            _id: "2",
            title: "Article 2",
            headline: {
              main: "Headline 2",
              print_headline: "Print Headline 2",
            },
            byline: {
              organization: null,
              original: "Byline 2",
            },
            pub_date: "2023-06-02",
            web_url: "https://example.com/article2",
            lead_paragraph: "Lead paragraph 2",
          },
        ],
      },
    };
    const store = mockStore(initialState);

    // Render the ItemCard component within the Redux provider
    render(
      <Provider store={store}>
        <ItemCard />
      </Provider>
    );

    // Assertion
    expect(screen.getByText("Headline 1")).toBeInTheDocument();
    expect(screen.getByText("Headline 2")).toBeInTheDocument();
    expect(screen.getByText("Byline 1")).toBeInTheDocument();
    expect(screen.getByText("Byline 2")).toBeInTheDocument();
    // Add more assertions for other elements if needed
  });
});
