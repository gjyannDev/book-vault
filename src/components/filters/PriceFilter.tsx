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

export default function PriceFilter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const price_options = [
    { label: "All Prices", value: "all" },
    { label: "₱0 - ₱500", value: "0-500" },
    { label: "₱501 - ₱1,000", value: "501-1000" },
    { label: "₱1,001 - ₱2,000", value: "1001-2000" },
    { label: "₱2,001 - ₱5,000", value: "2001-5000" },
    { label: "₱5,001 - ₱10,000", value: "5001-10000" },
  ];
  
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
            <DropdownMenuItem key={option.value}>
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
