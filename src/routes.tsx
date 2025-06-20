import App from "./App";
import BookListPage from "./features/books/pages/BookListPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "books/:all", element: <BookListPage /> },
      { path: "books/:bestseller", element: <BookListPage /> },
      { path: "books/:fiction", element: <BookListPage /> },
      { path: "books/:nonfiction", element: <BookListPage /> },
    ],
  },
];

export default routes;
