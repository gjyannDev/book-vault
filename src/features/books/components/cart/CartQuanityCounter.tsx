import { quantityCoutnerButton } from "@/components/shared/classNames";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartQuanityCounter() {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-4 border px-2 py-1 rounded">
          <Button variant="ghost" size="icon" className={quantityCoutnerButton}>
            <Minus />
          </Button>
          <span>{1}</span>
          <Button variant="ghost" size="icon" className={quantityCoutnerButton}>
            <Plus />
          </Button>
        </div>
        <Trash2 width={18} height={18} />
      </div>
    </div>
  );
}
