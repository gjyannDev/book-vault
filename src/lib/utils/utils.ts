import type { BookInfo, MinMaxPriceRange } from "@/types/bookTypes";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMinMaxPriceRange(value: string): MinMaxPriceRange {
  // if (value === "all") return {};

  const [minStr, maxStr] = value.split("-");
  const min = parseInt(minStr, 10);
  const max = parseInt(maxStr, 10);

  return { min, max };
}

export function sortWordAlphabetically(
  type: string,
  data: BookInfo[],
  setBooks: (books: BookInfo[]) => void
) {
  const sorted_books = [...data].sort((a, b) => {
    return type === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  setBooks(sorted_books);
}

export function sortPriceMaxMin(
  type: string,
  data: BookInfo[],
  setBooks: (books: BookInfo[]) => void
) {
  const sorted_books = [...data].sort((a, b) => {
    const priceA = parseInt(a.price.slice(1), 10);
    const priceB = parseInt(b.price.slice(1), 10);
    return type === "asc" ? priceA - priceB : priceB - priceA;
  });

  setBooks(sorted_books);
}

export function roundToTwoDecimals(num: number): number {
  return Math.round(num * 100) / 100;
}
