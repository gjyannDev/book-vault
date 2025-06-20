import { useEffect, useState } from "react";
import { getBookByCategory } from "./books/api";

export default function FetchData(category: string = "fiction") {
  const [fictionBooks, setFictionBooks] = useState({});
  const [bookByCategory, setBookByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setBookByCategory(get_books_by_category || []);
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
  };
}
