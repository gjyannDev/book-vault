import type { BookFilter } from "@/types/bookTypes";
import { Settings2 } from "lucide-react";
import PriceFilter from "./PriceFilter";
import SortFilter from "./SortFilter";

export default function BookFilter({ setBooks, books }: BookFilter) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 md:hidden">
        <Settings2 className="h-4 w-4" />
        <p className="font-lora-regular">Filter and sort</p>
      </div>
      <div className="hidden md:flex md:w-inherit md:justify-between">
        <div className="flex items-center">
          <p className="font-lora-regular">Filter: </p>
          <PriceFilter setBooks={setBooks} books={books} />
        </div>
        <div className=" flex items-center">
          <p className="font-lora-regular">Sort by:</p>
          <SortFilter setBooks={setBooks} books={books} />
        </div>
      </div>
    </div>
  );
}
