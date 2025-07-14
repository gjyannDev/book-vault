import { Button } from "@/components/ui/button";
import type { EmptyStateProps } from "@/types/bookTypes";
import clsx from "clsx";
import emptyImage from "../assets/images/empty_img.png";

export default function EmptyState(params: EmptyStateProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center my-[4.5rem] gap-8">
      <img
        src={emptyImage}
        alt="png image for empty state"
        className={clsx("w-[12.75rem]", "lg:w-[256px]")}
      />
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-playfair-bold text-2xl">{params.title}</h2>
          <p className="font-lora-regular text-sm max-w-xs">{params.message}</p>
        </div>
        <Button
          className="rounded-xs cursor-pointer"
          onClick={params.onActionClick}
        >
          {params.actionText}
        </Button>
      </div>
    </div>
  );
}
