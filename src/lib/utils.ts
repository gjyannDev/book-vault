import type { MinMaxPriceRange } from "@/types/bookTypes";
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

  return {min, max};
}
