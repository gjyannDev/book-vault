import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CartPage() {
  return (
    <div className="my-8">
      <h1 className="font-playfair-bold text-3xl">Your Cart</h1>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[256px] text-[#dbd2ce]">Product</TableHead>
            <TableHead className="hidden text-[#dbd2ce]">Quantity</TableHead>
            <TableHead className="text-[#dbd2ce]">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
                
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
