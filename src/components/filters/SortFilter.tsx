import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function SortFilter() {
  const [sortOpen, setSortOpen] = useState(false);
  const sort_options = [
    { label: "Alphabetically, A-Z", value: "Alphabetically A-Z" },
    { label: "Alphabetically, Z-A", value: "Alphabetically Z-A" },
    { label: "Price, low to high", value: "Price low to high" },
    { label: "Price, high to low", value: "Price high to low" },
  ];

  return (
    <DropdownMenu onOpenChange={setSortOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Alphabetically, A-Z
          {sortOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {sort_options.map((option) => (
            <DropdownMenuItem key={option.value}>
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
