import App from "./App";
import BookDetailsPage from "./features/books/pages/BookDetailsPage";
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
      { path: "books/:Fiction", element: <BookListPage /> },
      { path: "books/:Nonfiction", element: <BookListPage /> },
      { path: "books/:Fiction/:id", element: <BookDetailsPage /> },
    ],
  },
];

export default routes;
