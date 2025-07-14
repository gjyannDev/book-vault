import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { AuthSignupDialogProps } from "@/types/bookTypes";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function AuthSignupDialog({
  open,
  onClose,
}: AuthSignupDialogProps) {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={clsx(
          "w-full max-w-md md:max-w-lg lg:max-w-xl",
          "p-6 sm:p-8 md:p-10",
          "text-[var(--primary-text)]",
          "flex flex-col items-center justify-center text-center"
        )}
      >
        <DialogHeader className="w-full space-y-2">
          <DialogTitle
            className={clsx("font-playfair-bold text-2xl", "md:text-3xl")}
          >
            Create an Acccount
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            You need to sign in or sign up to add books to your favorites or
            cart
          </DialogDescription>
        </DialogHeader>
        <DialogFooter
          className={clsx(
            "w-full flex flex-col sm:flex-row justify-center gap-4 mt-6"
          )}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="px-8 py-2 w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
              navigate("/signup");
            }}
            className="px-8 py-2 w-full sm:w-auto"
          >
            Sign up
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
