import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import OfferPage from "./components/OfferPage";
import ErrorPage from "./components/ErrorPage";
import HelpPage from "./components/HelpPage";
import CartPage from "./components/CartPage";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import useLoginData from "./utils/useLoginData";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const userName = useLoginData();

  return (
    <Provider store={appStore}>
      <div className="app">
        <userContext.Provider value={{ loginUser: userName }}>
          <Header />
        </userContext.Provider>
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/offers",
        element: <OfferPage />,
      },
      {
        path: "/help",
        element: <HelpPage name={"assistant"} id={"123"} />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
