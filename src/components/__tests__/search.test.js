import { BrowserRouter } from "react-router-dom";
import Main from "../Main";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resApiMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA), // These test cases will only run with cards[5] API changed
  })
);

describe("Main component search and filter tests", () => {
  it("Should search resList for KFC ", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Main />
          </Provider>
        </BrowserRouter>
      );
    });

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "KFC" } });

    const searchbtn = screen.getByTestId("searchBtn");
    fireEvent.click(searchbtn);

    const cards = screen.getAllByTestId("resCard"); // 9 cards total

    expect(cards.length).toBe(1);
  });

  it("Should filter cards based on rating >= 4.3", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Main />
          </Provider>
        </BrowserRouter>
      );
    });

    const filterBtn = screen.getByTestId("filterBtn");
    fireEvent.click(filterBtn);

    const filterCards = screen.getAllByTestId("resCard");

    expect(filterCards.length).toBe(2);
  });
});
