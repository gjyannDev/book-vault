import { useEffect, useState } from "react";
import { getBookByCategory } from "./books/api";

export default function useFetchData(
  category: string = "fiction",
  page: number = 0
) {
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
        const get_books_by_category = await getBookByCategory(category, page);
        setBookByCategory(get_books_by_category?.items || []);
        setTotalItems(get_books_by_category?.totalItems || 0);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [category, page]);

  return {
    isLoading,
    bookByCategory,
    totalItems,
  };
}
