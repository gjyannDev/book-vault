import clsx from "clsx";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function CallToActionFooter() {
  return (
    <div className="py-12 bg-[var(--secondary-clr)] text-[var(--primary-text)]">
      <div
        className={clsx(
          "container flex flex-col gap-8",
          "mx-auto px-4 sm:px-8 lg:px-14",
          "lg:flex-row lg:items-center lg:justify-between"
        )}
      >
        <div className="flex flex-col gap-2">
          <h1
            className={clsx(
              "font-playfair-bold text-4xl",
              "md:text-5xl md:max-w-md md:leading-[1.3]",
              "lg:max-w-lg",
              "xl:text-6xl xl:max-w-xl"
            )}
          >
            Great Books. Great Prices
          </h1>
          <p className={clsx("font-lora-regular", "md:max-w-lg xl:text-lg")}>
            Don't overspend on your next read. Find bestsellers and hidden gems
            at prices that make sense.
          </p>
        </div>
        <div className="">
          <Link to="">
            <Button
              className={clsx(
                "rounded-xs px-5 py-2 text-base",
                "lg:px-8 lg:py-6.5 lg:rounded-md",
                "xl:px-12 xl:py-7.5 xl:text-xl"
              )}
            >
              Start your journey
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
