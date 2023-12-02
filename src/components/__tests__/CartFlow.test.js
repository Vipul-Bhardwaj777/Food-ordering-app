import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import ResMenu from "../ResMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/menuApiMock.json";
import "@testing-library/jest-dom";
import CarttPage from "../CarttPage";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Cart flow test cases", () => {
  it("Should render Menu and Header", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResMenu />
          </Provider>
        </BrowserRouter>
      );
    });
  });

  it("Should added item to the header Cart", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResMenu />
          </Provider>
        </BrowserRouter>
      );
    });

    const addBtns = screen.getAllByTestId("addBtn");
    const headerCart = screen.getByText(/Cart/i);
    expect(headerCart.textContent).toBe("Cart (0)");

    fireEvent.click(addBtns[0]);

    expect(headerCart.textContent).toBe("Cart (1)");
  });

  it("Should remove item from the header Cart", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResMenu />
          </Provider>
        </BrowserRouter>
      );
    });

    const removebtns = screen.getAllByTestId("removeBtn");
    fireEvent.click(removebtns[0]);

    const headerCart = screen.getByText(/Cart/);

    expect(headerCart.textContent).toBe("Cart (0)");
  });

  it("Should add items to the CartPage", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <ResMenu />
            <CarttPage />
          </Provider>
        </BrowserRouter>
      );
    });

    const addBtns = screen.getAllByTestId("addBtn");
    fireEvent.click(addBtns[0]);

    const cartItems = screen.getAllByTestId("cartItems");

    expect(cartItems.length).toBe(1);
  });

  it("Should clear the CartPage", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <ResMenu />
            <CarttPage />
          </Provider>
        </BrowserRouter>
      );
    });

    const clearCart = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCart);

    const emptyHeading = screen.getByText("Yout cart is empty");

    expect(emptyHeading).toBeInTheDocument();
  });
});
