import PaginationCard from "@/components/layout/PaginationCard";
import { simplifiedGoogleBooks } from "@/lib/transformer";
import useFetchData from "@/services/api/useFetchData";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ShopCard from "../components/ShopCard";

export default function BookListPage() {
  const { all } = useParams();
  const [page, setPage] = useState(0);
  const max_result = 16;
  const { bookByCategory, isLoading, totalItems } = useFetchData(
    all,
    page * max_result
  );
  const books = useMemo(
    () => simplifiedGoogleBooks(bookByCategory),
    [bookByCategory]
  );
  const header_text = all
    ?.split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
    .join("");

  useEffect(() => {
    setPage(0);
  }, [all]);

  return (
    <div
      className={clsx(
        "font-lora-regular text-[var(--primary-text)] my-8",
        "md:my-10 lg:my-12 xl:my-14"
      )}
    >
      <div className="flex flex-col gap-12 md:gap-18 lg:gap-22">
        <div className="flex flex-col gap-2 xl:gap-3">
          <h1 className="font-playfair-bold text-4xl md:text-5xl">
            {header_text}
          </h1>
          <p
            className={clsx(
              "font-lora-regular text-base",
              "md:text-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
            )}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            exercitationem officia sequi mollitia doloribus veritatis nemo nisi.
            Nesciunt, cumque consectetur.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="">Filter: </div>
          <div className="">
            <ShopCard
              bookInfo={books}
              variant="compact"
              isLoading={isLoading}
            />
            <PaginationCard
              totalItems={totalItems}
              page={page}
              setPage={setPage}
              maxResults={max_result}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
