import type { BookInfo } from "@/types/bookTypes";
import clsx from "clsx";

export default function CartDetails({ book }: { book: BookInfo }) {
  return (
    <div className="flex w-full gap-2">
      <img
        src={book.image}
        className={clsx(
          "w-[6rem] flex-shrink-0",
          "md:w-[7.375rem]",
          "lg:w-[8.75rem]"
        )}
      />
      <div className="flex md:flex-row">
        <h3
          className={clsx(
            "font-playfair-bold text-sm break-words max-w-[8.75rem] whitespace-normal",
            "md:text-lg md:max-w-[13.375rem]",
            "lg:max-w-[20.25rem]"
          )}
        >
          {book.title}
        </h3>
      </div>
    </div>
  );
}
