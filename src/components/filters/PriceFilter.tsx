import { getMinMaxPriceRange } from "@/lib/utils";
import type { BookFilter } from "@/types/bookTypes";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function PriceFilter({ setBooks, books }: BookFilter) {
  const [menuOpen, setMenuOpen] = useState(false);
  const price_options = [
    { label: "All Prices", value: "all" },
    { label: "₱0 - ₱500", value: "0-500" },
    { label: "₱501 - ₱1,000", value: "501-1000" },
    { label: "₱1,001 - ₱2,000", value: "1001-2000" },
    { label: "₱2,001 - ₱5,000", value: "2001-5000" },
    { label: "₱5,001 - ₱10,000", value: "5001-10000" },
  ];

  function handlePriceRangeChange(value: string) {
    const range = getMinMaxPriceRange(value);
    if (!range) {
      setBooks(books);
      return;
    }

    const { min, max } = range;

    const filtered_books = books.filter((item) => {
      const price_val = parseFloat(item.price.slice(1));
      console.log("price value: ", price_val)
      if (isNaN(price_val)) return false;
      return price_val >= min && price_val <= max;
    });

    console.log("filted_books: ", filtered_books);

    setBooks(filtered_books);
  }

  return (
    <DropdownMenu onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Price
          {menuOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Price Range</DropdownMenuLabel>
        <DropdownMenuGroup>
          {price_options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handlePriceRangeChange(option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
