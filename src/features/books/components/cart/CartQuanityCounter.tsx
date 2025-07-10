import { quantityCoutnerButton } from "@/components/shared/classNames";
import { Button } from "@/components/ui/button";
import { updateCartData } from "@/services/user/cart.api";
import type { BookInfo } from "@/types/bookTypes";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export default function CartQuanityCounter({ book }: { book: BookInfo }) {
  const [quantity, setQuantity] = useState<number>(1);
  console.log(typeof book.price)

  async function handleIncrement(newQuantity: number) {
    setQuantity(newQuantity);

    const updated_total = Number(book.price ) * quantity;

    const data = {
      bookId: book.id,
      total: updated_total,
      quantity: quantity,
    };

    await updateCartData(data);
  }

  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-4 border px-2 py-1 rounded cursor-pointer">
          <Button variant="ghost" size="icon" className={quantityCoutnerButton}>
            <Minus className="" />
          </Button>
          <span>{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className={quantityCoutnerButton}
            onClick={() => handleIncrement(quantity + 1)}
          >
            <Plus />
          </Button>
        </div>
        <Trash2 width={18} height={18} />
      </div>
    </div>
  );
}
