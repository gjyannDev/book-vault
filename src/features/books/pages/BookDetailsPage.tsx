import { Button } from "@/components/ui/button";
import FavoriteButton from "@/features/FavoriteButton";
import type { BookInfo } from "@/types/bookTypes";
import clsx from "clsx";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function BookDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const get_books = location.state?.bookInfo ?? [];
  const category = location.state?.category ?? "Fiction";
  const books = get_books.find((book: BookInfo) => book.id === id);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={clsx(
        "font-lora-regular text-[var(--primary-text)] my-4",
        "md:my-6 lg:my-8 xl:my-10"
      )}
    >
      <div
        className={clsx(
          "flex items-center gap-2 self-start mb-4 cursor-pointer",
          "text-[var(--primary-text)]",
          "md:mb-6 lg:mb-8 xl:mb-10"
        )}
        onClick={() => navigate(`/books/${category}`)}
      >
        <ArrowLeft className="w-6 h-6" />
        Back
      </div>
      <div className="md:flex gap-8">
        <img
          src={books?.image}
          alt="book cover image"
          className={clsx(
            "w-full",
            "md:w-[472px] md:h-[472px]",
            "xl:w-[572px] xl:h-[572px]"
          )}
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className={clsx("flex flex-col gap-2", "md:flex md:flex-col")}>
              <h1
                className={clsx(
                  "font-playfair-bold text-4xl mt-2",
                  "md:text-5xl md:mt-0",
                  "xl:leading-[1.3] xl:max-w-2xl"
                )}
              >
                {books?.title}
              </h1>
              <div className="flex gap-2 font-lora-regular text-sm">
                <p className="">Author: </p>
                <p className="">{books?.authors}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 md">
              <p className="md:text-lg">{`${books?.price} PHP`}</p>
              <div className="flex gap-4 items-center">
                <Button className="px-6 py-4 text-sm rounded-xs lg:px-8 lg:py-5 lg:text-md">
                  Add to cart
                </Button>
                <FavoriteButton variant="details" />
              </div>
            </div>
          </div>
          <div className="">
            <p
              className={clsx(
                "text-sm leading-[1.5]",
                "md:text-base md:leading-[1.6]",
                expanded ? "" : "line-clamp-12"
              )}
            >
              {books?.description}
            </p>
            <p
              className="underline text-sm mt-2 cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "Show More"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
