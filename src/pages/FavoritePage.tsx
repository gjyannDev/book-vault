import ShopCard from "@/features/books/components/ShopCard";
import useFetchData from "@/services/api/useFetchData";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function FavoritePage() {
  const [refetchKey, setRefetchKey] = useState<number>(0);
  const { favoriteBooks } = useFetchData(undefined, 0, refetchKey);
  const { all } = useParams();
  const category = all ?? "Fiction";

  return (
    <div className="my-8 md:my-10">
      <h1 className="font-playfair-bold text-3xl">Added Books</h1>
      <ShopCard
        bookInfo={favoriteBooks}
        variant="favorite"
        baseRoute="/favorite"
        category={category}
        backRoute="/favorite"
        onTriggerRefetch={() => setRefetchKey((prev) => prev + 1)} 
      />
    </div>
  );
}
