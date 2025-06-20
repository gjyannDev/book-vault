import FetchData from "@/services/api/FetchData";
import { useParams } from "react-router-dom";

export default function BookListPage() {
  const { all } = useParams();
  const { bookByCategory } = FetchData(all);

  return (
    <div className="">
      <h1>{all}</h1>
    </div>
  );
}
