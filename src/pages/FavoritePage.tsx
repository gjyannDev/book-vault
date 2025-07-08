import ShopCard from "@/features/books/components/ShopCard";
import useFetchData from "@/services/api/useFetchData";
import { useParams } from "react-router-dom";

export default function FavoritePage() {
  const { favoriteBooks } = useFetchData();
  const { all } = useParams();
  const category = all ?? "Fiction";

  return (
    <div className="my-8 md:my-10">
      <h1 className="font-playfair-bold text-3xl">Added Books</h1>
      <div className="">
        <ShopCard
          bookInfo={favoriteBooks}
          variant="favorite"
          baseRoute="/favorite"
          category={category}
          backRoute="/favorite"
        />
      </div>
    </div>
  );
}
