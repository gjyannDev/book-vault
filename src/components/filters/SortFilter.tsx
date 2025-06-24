import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function SortFilter() {
  const sort_options = [
    { label: "Alphabetically, A-Z", value: "Alphabetically A-Z" },
    { label: "Alphabetically, Z-A", value: "Alphabetically Z-A" },
  ];
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Alphabetically, A-Z</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent></DropdownMenuContent>
    </DropdownMenu>
  );
}
