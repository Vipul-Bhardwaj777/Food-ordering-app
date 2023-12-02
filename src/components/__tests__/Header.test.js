import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header component test cases", () => {
  it("Should render Header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const link = screen.getByText("Offers");

    expect(link).toBeInTheDocument();
  });

  it("Should change login btn to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByText("Login");

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByText("Guest");

    expect(logoutBtn).toBeInTheDocument;

    fireEvent.click(logoutBtn);

    expect(loginBtn).toBeInTheDocument;
  });
});
