import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/useCurrentUser";
import { addCart } from "@/services/user/cart.api";
import type { CartButtonProps } from "@/types/bookTypes";
import { ShoppingCart } from "lucide-react";

export default function CartButton(params: CartButtonProps) {
  const book = params.books.find((book) => book.id === params.bookId);
  const { uid } = useCurrentUser();
  const price = Number(book?.price.slice(1));

  async function handleAddCart(
    e:
      | React.MouseEvent<HTMLElement>
      | React.MouseEvent<SVGSVGElement, MouseEvent>
  ) {
    e.stopPropagation();

    if (!uid || !book?.id || !book.title) {
      // Optionally show an error/toast here
      return;
    }

    const data = {
      id: book?.id,
      image: book?.image,
      title: book?.title,
      price: price,
      quantity: 1,
    };

    await addCart(data);
  }

  return (
    <div className="">
      {params.buttonVariant === "card" ? (
        <Button
          className="px-6 py-4 text-sm rounded-sm lg:px-3 lg:py-1 lg:text-xs"
          onClick={(e) => handleAddCart(e)}
        >
          Add to cart
        </Button>
      ) : params.buttonVariant === "details" ? (
        <Button
          className="px-6 py-4 text-sm rounded-xs lg:px-8 lg:py-5 lg:text-md"
          onClick={(e) => handleAddCart(e)}
        >
          Add to cart
        </Button>
      ) : (
        <ShoppingCart
          color="var(--base-black)"
          width={20}
          height={20}
          onClick={(e) => handleAddCart(e)}
        />
      )}
    </div>
  );
}
