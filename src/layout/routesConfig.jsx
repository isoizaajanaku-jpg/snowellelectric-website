import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";

export const routesConfig = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
  path: "/products",
  element: <Products />,
}
    ],
  },
];
