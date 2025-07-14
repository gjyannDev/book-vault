import SkeletonCard from "@/components/layout/SkeletonCard";
import ShopCard from "@/features/books/components/ShopCard";
import useFetchData from "@/services/api/useFetchData";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmptyState from "./EmptyState";

export default function FavoritePage() {
  const [refetchKey, setRefetchKey] = useState<number>(0);
  const { favoriteBooks, isLoading } = useFetchData(undefined, 0, refetchKey);
  const { all } = useParams();
  const category = all ?? "Fiction";
  const navigate = useNavigate();

  return (
    <div className="my-8 md:my-10">
      <h1 className="font-playfair-bold text-3xl">Added Books</h1>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 16 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : favoriteBooks.length === 0 ? (
        <EmptyState
          title="No favorites yet"
          message="Looks like you haven't added any books to your favorites. Tap the heart icon on books you love to save them here."
          actionText="Browse Books"
          onActionClick={() => navigate("/books/Fiction")}
        />
      ) : (
        <ShopCard
          bookInfo={favoriteBooks}
          variant="favorite"
          baseRoute="/favorite"
          category={category}
          backRoute="/favorite"
          onTriggerRefetch={() => setRefetchKey((prev) => prev + 1)}
        />
      )}
    </div>
  );
}
