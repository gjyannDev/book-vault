import type { BookInfo } from "@/types/bookTypes";
import { useLocation, useParams } from "react-router-dom";

export default function BookDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const books = location.state?.bookInfo ?? [];
  const book = books.find((book: BookInfo) => book.id === id);

  return (
    <div className="">
      
    </div>
  )
}
