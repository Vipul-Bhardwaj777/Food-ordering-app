import { BrowserRouter } from "react-router-dom";
import Main from "../Main";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resApiMock.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search resList for KFC ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Main />
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
