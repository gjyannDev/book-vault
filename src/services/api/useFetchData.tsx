import useCurrentUser from "@/hooks/useCurrentUser";
import type { BookInfo, RawData } from "@/types/bookTypes";
import { useEffect, useState } from "react";
import { getFavorites } from "../user/favorite.api";
import { getBookByCategory } from "./books/api";

export default function useFetchData(
  category: string = "fiction",
  page: number = 0
) {
  const [bookByCategory, setBookByCategory] = useState<RawData[]>([]);
  const [favoriteBooks, setFavoriteBooks] = useState<BookInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalItems, setTotalItems] = useState<number>(0);

  const { uid } = useCurrentUser();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        if (uid) {
          const get_fiction_books = await getFavorites(uid);
          setFavoriteBooks(get_fiction_books || {});
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [uid]);

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
    favoriteBooks,
  };
}
