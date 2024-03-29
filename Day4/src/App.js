import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";
//Default export
import Header from "./components/Header";
//Named export
import { Title } from './components/Header';

import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { IMG_CDN_URL } from "./config";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


// JSX can only have one parent
// if you don't want div in your jsx code then you can use react fragments, it is like an empty tag
// we can use it like this -> <React.Fragment></React.Fragment> or we can simply write -> <> </>

// INLINE STYLING in React
const jsx = (
  <div style={{ backgroundColor: "red" }}>
    <h1>JSX</h1>
    <h2>This is a h2 tag</h2>
  </div>
);


//Never use index as a key
// no key (not acceptable) <<<<< index key (use only if you dont have anything) << unique key (best practice)


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
    ],
  },
])

//React uses virtual DOM
// A representation of DOM is known as Virtual DOM
// Reconciliation is a diff algorithm that React uses to find out the difference between actual and virtual DOM and finds out what needs to be updated and just updates the small part where it needs to be updated

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
