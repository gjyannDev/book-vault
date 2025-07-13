import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/useCurrentUser";
import { addFavorite, removeFavorite } from "@/services/user/favorite.api";
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

  async function handleRemoveFavorite(
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) {
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

    try {
      await removeFavorite(data);

      if (params.onTriggerFetch) {
        params.onTriggerFetch();
      }
    } catch (err) {
      console.error("Failed to remove from Firestore", err);
    }
  }

  return (
    <div className="">
      {params.buttonVariant === "card" ? (
        <Button
          className="rounded-none text-sm px-3 py-1.5 lg:px-2 lg:py-1 lg:text-xs"
          variant="ghost"
          onClick={(e) => handleFavoriteClick(e)}
        >
          Favorite
        </Button>
      ) : params.buttonVariant === "favorite" ? (
        <Heart
          color="var(--base-black)"
          width={20}
          height={20}
          fill={params.variant === "favorite" ? "#f75350" : ""}
          stroke={params.variant === "favorite" ? "#f75350" : ""}
          onClick={(e) => handleRemoveFavorite(e)}
        />
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
