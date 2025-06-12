import App from "./App";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
];

export default routes;
