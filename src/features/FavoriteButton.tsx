import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/useCurrentUser";
import { addFavorite } from "@/services/user/favorite.api";
import type { FavoriteButtonProps } from "@/types/bookTypes";
import clsx from "clsx";
import { Heart } from "lucide-react";

export default function FavoriteButton(params: FavoriteButtonProps) {
  const book = params.books.find((book) => book.id === params.bookId);
  const { uid } = useCurrentUser();

  async function handleFavoriteClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();

    if (!uid || !book?.id || !book.title) {
      // Optionally show an error/toast here
      return;
    }

    const data = {
      userId: uid,
      id: book?.id,
      authors: book?.authors,
      description: book?.description,
      image: book?.image,
      price: book?.price,
      title: book?.title,
      category: params.category,
    };

    await addFavorite(data);
  }

  return (
    <div className="">
      {params.variant === "card" ? (
        <Button
          className="rounded-none text-sm px-3 py-1.5 lg:px-2 lg:py-1 lg:text-xs"
          variant="ghost"
          onClick={(e) => handleFavoriteClick(e)}
        >
          Favorite
        </Button>
      ) : (
        <Button variant="ghost" onClick={(e) => handleFavoriteClick(e)}>
          <Heart
            className={clsx(
              "w-7 h-7 text-[var(--base-black)]",
              "md:w-8 md:h-8",
              "xl:w-9 xl:h-9"
            )}
          />
        </Button>
      )}
    </div>
  );
}
