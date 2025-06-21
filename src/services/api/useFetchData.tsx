import { useEffect, useState } from "react";
import { getBookByCategory } from "./books/api";

export default function useFetchData(category: string = "fiction") {
  const [fictionBooks, setFictionBooks] = useState({});
  const [bookByCategory, setBookByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsLoading(true);
  //     try {
  //       const get_fiction_books = await getFictionBooks();
  //       setFictionBooks(get_fiction_books || {});
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const get_books_by_category = await getBookByCategory(category);
        setBookByCategory(get_books_by_category?.items || []);
        setTotalItems(get_books_by_category?.totalItems || 0);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [category]);

  return {
    fictionBooks,
    setFictionBooks,
    isLoading,
    bookByCategory,
    totalItems,
  };
}
