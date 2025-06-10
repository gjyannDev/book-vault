import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import clsx from "clsx";

interface BookInfo {
  image: string;
  price: string;
  title: string;
  description: string;
}

interface ShopCardProps {
  bookInfo: BookInfo[];
}

export default function ShopCard({ bookInfo }: ShopCardProps) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
      {bookInfo.map((detail, idx) => (
        <Card
          key={idx}
          className="flex gap-0 w-full max-w-md bg-transparent border-none outline-none shadow-none rounded-none"
        >
          <CardHeader className="p-0">
            <img
              src={detail.image}
              alt="books cover image"
              className="w-full object-cover h-96 lg:h-72"
            />
          </CardHeader>
          <CardContent className="p-0">
            <p
              className={clsx(
                "font-lora-regular text-primary text-lg mb-2",
                "lg:text-base"
              )}
            >
              {detail.price}
            </p>
            <div className="flex flex-col gap-4">
              <h1
                className={clsx(
                  "font-playfair-bold text-2xl line-clamp3 transition group-hover:underline cursor-pointer",
                  "lg:text-xl"
                )}
              >
                {detail.title}
              </h1>
              <p
                className={clsx(
                  "font-lora-regular text-sm text-muted-foreground line-clamp-3",
                  "lg:text-xs lg:leading-[1.5]"
                )}
              >
                {detail.description}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex gap-8 p-0 mt-8 lg:gap-2">
            <Button className="px-6 py-4 text-sm rounded-sm lg:px-3 lg:py-1 lg:text-xs">
              Add to cart
            </Button>
            <Button
              className="rounded-none text-sm px-3 py-1.5 lg:px-2 lg:py-1 lg:text-xs"
              variant="ghost"
            >
              Favorite
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
