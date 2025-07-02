import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
