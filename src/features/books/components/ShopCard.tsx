import SkeletonCard from "@/components/layout/SkeletonCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import FavoriteButton from "@/features/FavoriteButton";
import type { ShopCardProps } from "@/types/bookTypes";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ShopCard({
  bookInfo,
  variant = "standard",
  isLoading,
  category,
  baseRoute,
  backRoute,
}: ShopCardProps) {
  const navigate = useNavigate();

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
      {bookInfo.map((detail, idx) =>
        isLoading ? (
          Array.from({ length: 8 }).map((_, i) => <SkeletonCard idx={i} />)
        ) : (
          <Card
            key={idx}
            className={clsx(
              "flex gap-0 w-full max-w-md text-[var(--primary-text)]",
              "bg-transparent border-none outline-none shadow-none rounded-none"
            )}
            onClick={() =>
              navigate(`${baseRoute}/${category}/${detail.id}`, {
                state: { bookInfo, category, backRoute },
              })
            }
          >
            <CardHeader className="p-0">
              <img
                src={detail.image}
                alt="books cover image"
                className="w-full object-cover h-96 lg:h-72"
              />
            </CardHeader>
            <CardContent className="p-0">
              {(variant === "standard" || variant === "compact") && (
                <p
                  className={clsx(
                    "font-lora-regular text-primary text-lg mb-2",
                    "lg:text-base"
                  )}
                >
                  {detail.price}
                </p>
              )}

              <div
                className={clsx(
                  "flex flex-col",
                  variant === "featured" ? "gap-1 lg:gap-2.5" : "gap-3"
                )}
              >
                <h1
                  className={clsx(
                    "font-playfair-bold text-2xl line-clamp-3 transition group-hover:underline cursor-pointer",
                    "lg:text-xl"
                  )}
                >
                  {detail.title}
                </h1>
                {variant === "featured" ||
                  (variant === "favorite" && (
                    <div className="flex justify-between items-center">
                      <div className="">
                        <p
                          className={clsx(
                            "font-lora-regular text-primary text-base",
                            "lg:text-sm"
                          )}
                        >
                          {detail.price}
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <ShoppingCart
                          color="var(--base-black)"
                          width={20}
                          height={20}
                        />
                        <FavoriteButton
                          buttonVariant="favorite"
                          books={bookInfo}
                          bookId={detail.id}
                          category={category}
                          variant="favorite"
                        />
                      </div>
                    </div>
                  ))}
                {variant === "standard" && (
                  <p
                    className={clsx(
                      "font-lora-regular text-sm text-muted-foreground line-clamp-3",
                      "lg:text-xs lg:leading-[1.5] xl:text-sm xl:leading-[1.6]"
                    )}
                  >
                    {detail.description}
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter
              className={clsx(
                "flex gap-8 p-0 lg:gap-2",
                variant === "compact" ? "mt-3" : "mt-8"
              )}
            >
              {(variant === "standard" || variant === "compact") && (
                <>
                  <Button className="px-6 py-4 text-sm rounded-sm lg:px-3 lg:py-1 lg:text-xs">
                    Add to cart
                  </Button>
                  <FavoriteButton
                    buttonVariant="card"
                    books={bookInfo}
                    bookId={detail.id}
                    category={category}
                  />
                </>
              )}
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
}
