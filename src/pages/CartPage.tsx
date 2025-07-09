import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CartDetails from "@/features/books/components/cart/CartDetails";
import CartQuanityCounter from "@/features/books/components/cart/CartQuanityCounter";
import useFetchData from "@/services/api/useFetchData";
import clsx from "clsx";

export default function CartPage() {
  const { cartBooks } = useFetchData();

  console.log(cartBooks);
  return (
    <div className="my-8 lg:my-10 xl:my-12">
      <h1
        className={clsx(
          "font-playfair-bold text-3xl",
          "lg:text-4xl",
          "xl:text-5xl"
        )}
      >
        Your Cart
      </h1>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[372px] text-[#dbd2ce] md:w-[380px] lg:w-[524px]">
              Product
            </TableHead>
            <TableHead className="hidden md:table-cell text-[#dbd2ce]">
              Quantity
            </TableHead>
            <TableHead className="hidden md:table-cell text-[#dbd2ce]">
              Total
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartBooks.map((book) => (
            <TableRow>
              <TableCell colSpan={3} className="block md:hidden py-6">
                <div className="flex flex-col gap-4">
                  <CartDetails book={book} />

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity</span>
                    <CartQuanityCounter />
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total</span>
                    <span>₱100</span>
                  </div>
                </div>
              </TableCell>

              <TableCell className="hidden md:flex align-top py-6">
                <CartDetails book={book} />
              </TableCell>
              <TableCell className="hidden md:table-cell align-top py-6">
                <CartQuanityCounter />
              </TableCell>
              <TableCell className="hidden md:table-cell align-top py-6">
                ₱100
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div
        className={clsx(
          "flex flex-col gap-6 items-start mt-12",
          "md:items-end"
        )}
      >
        <div className="flex gap-4">
          <p className="font-lora-bold">Subtotal</p>
          <p className="font-lora-regular">₱ 469.00 PHP</p>
        </div>
        <Button className={clsx("rounded-xs px-12 py-2", "md:px-18")}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
