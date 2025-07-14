import { quantityCoutnerButton } from "@/components/shared/classNames";
import { Button } from "@/components/ui/button";
import { roundToTwoDecimals } from "@/lib/utils/utils";
import { removeCartData, updateCartData } from "@/services/user/cart.api";
import type { CartCounterProps } from "@/types/bookTypes";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CartQuanityCounter({
  book,
  onFetchTrigger,
  isLoading,
}: CartCounterProps) {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setQuantity(book.quantity);
  }, [book.quantity]);

  async function handleIncrement(newQuantity: number) {
    setQuantity(newQuantity);

    const updated_total = Number(book.price) * newQuantity;

    const data = {
      bookId: book.id,
      total: roundToTwoDecimals(updated_total),
      quantity: newQuantity,
    };

    await updateCartData(data);
    onFetchTrigger();
  }

  async function handleDecrement(newQuantity: number) {
    setQuantity(newQuantity);

    const updated_total = Number(book.price) * newQuantity;

    const data = {
      bookId: book.id,
      total: roundToTwoDecimals(updated_total),
      quantity: newQuantity,
    };

    await updateCartData(data);
    onFetchTrigger();
  }

  async function removeCart() {
    await removeCartData(book.id);
    onFetchTrigger();
  }

  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-4 border px-2 py-1 rounded cursor-pointer">
          <Button
            variant="ghost"
            size="icon"
            className={quantityCoutnerButton}
            onClick={() => handleDecrement(Math.max(quantity - 1, 1))}
            disabled={isLoading}
          >
            <Minus className="" />
          </Button>
          <span>{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className={quantityCoutnerButton}
            onClick={() => handleIncrement(quantity + 1)}
            disabled={isLoading}
          >
            <Plus />
          </Button>
        </div>
        <Trash2 width={18} height={18} onClick={removeCart} />
      </div>
    </div>
  );
}
