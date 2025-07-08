import { Button } from "@/components/ui/button";
import type { CartButtonProps } from "@/types/bookTypes";
import { ShoppingCart } from "lucide-react";

export default function CartButton(params: CartButtonProps) {
  function handleAddCart(
    e:
      | React.MouseEvent<HTMLElement>
      | React.MouseEvent<SVGSVGElement, MouseEvent>
  ) {
    e.stopPropagation();

    alert("add to cart clicked");
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
