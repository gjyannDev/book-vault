import { simplifiedGoogleBooks } from "@/lib/transformer";
import useFetchData from "@/services/api/useFetchData";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import ShopCard from "../components/ShopCard";

export default function BookListPage() {
  const { all } = useParams();
  const { bookByCategory, isLoading} = useFetchData(all);
  const books = useMemo(
    () => simplifiedGoogleBooks(bookByCategory),
    [bookByCategory]
  );

  console.log(bookByCategory);

  return (
    <div className="">
      <div className="">
        <h1>{all}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          exercitationem officia sequi mollitia doloribus veritatis nemo nisi.
          Nesciunt, cumque consectetur.
        </p>
      </div>
      <div className=""></div>
      <div className="">
        <ShopCard bookInfo={books} variant="compact" isLoading={isLoading}/>
      </div>
    </div>
  );
}
