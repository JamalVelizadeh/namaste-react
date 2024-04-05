import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NotFound from "./components/404NotFound";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import RestourantMenuPage from "./components/RestourantMenuPage";
import appStore from "./utils/appStore";
import Cart from './components/Cart';
// import About from "./components/About";
// import Grocery from "./components/Grocery";

// //!React Element is this
// //? Start
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Camal is thereeeeee"
// );
// ? Finish
// //! React Component is this
// //? Start
// const HeadingComponent = () => {
//   return (
//     <h1 id="hiJamal">
//       <JsxHeading>Childrendi bax</JsxHeading>
//       Salam Component
//     </h1>
//   );
// };
// ? Finish

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const About = lazy(() => {
  return import("./components/About");
});

const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </Provider>
    </>
  );
};

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestourantMenuPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
