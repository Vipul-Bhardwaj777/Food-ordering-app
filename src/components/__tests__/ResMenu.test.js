import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import ResMenu from "../ResMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/menuApiMock.json";
import "@testing-library/jest-dom";
import MenuCard from "../MenuCard";
import MOCK_MENUCARD from "../mocks/menuCardMock.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("ResMenu tests", () => {
  it("Should render ResMenu", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <ResMenu />
          </Provider>
        </BrowserRouter>
      );
    });
  });

  it("Should filter veg items", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <ResMenu />
            <MenuCard itemProp={MOCK_MENUCARD} />
          </Provider>
        </BrowserRouter>
      );
    });
    screen.debug();

    const vegFilter = screen.getByTestId("vegFilter");
    const menuCardHeade = screen.getAllByTestId("menuCardHeade");

    fireEvent.click(vegFilter);

    expect(menuCardHeade[0].textContent).toBe("Recommended(6)");
  });
});
