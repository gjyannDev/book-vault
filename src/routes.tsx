import App from "./App";
import BookDetailsPage from "./features/books/pages/BookDetailsPage";
import BookListPage from "./features/books/pages/BookListPage";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "favorite", element: <FavoritePage /> },
      { path: "cart", element: <CartPage /> },
      { path: "signin", element: <SigninPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "books/:all", element: <BookListPage /> },
      { path: "books/:bestseller", element: <BookListPage /> },
      { path: "books/:Fiction", element: <BookListPage /> },
      { path: "books/:Nonfiction", element: <BookListPage /> },
      { path: "books/:category/:id", element: <BookDetailsPage /> },
      { path: "favorite/:category/:id", element: <BookDetailsPage /> },
    ],
  },
];

export default routes;
