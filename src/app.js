import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import useLoginData from "./utils/useLoginData";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const OfferPage = lazy(() => import("./components/OfferPage"));
const HelpPage = lazy(() => import("./components/HelpPage"));
const ResMenu = lazy(() => import("./components/ResMenu"));
const CarttPage = lazy(() => import("./components/CarttPage"));

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
        element: (
          <Suspense>
            <OfferPage />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense>
            <HelpPage name={"assistant"} id={"123"} />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense>
            <CarttPage />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense>
            <ResMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
