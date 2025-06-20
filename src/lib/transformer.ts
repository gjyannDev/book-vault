import type { BookInfo, RawData} from "@/types/bookTypes";

export function simplifiedGoogleBooks(rawData: RawData[]): BookInfo[] {
  return rawData.map((item) => {
    const amount = item.saleInfo?.listPrice?.amount;
    const currency = item.saleInfo?.listPrice?.currencyCode;

    return {
      image:
        item.volumeInfo?.imageLinks?.thumbnail ||
        item.volumeInfo?.imageLinks?.smallThumbnail ||
        "https://books.google.com/googlebooks/images/no_cover_thumb.gif",
      price: amount
        ? `${currency === "PHP" ? "₱" : currency || "$"} ${amount}`
        : "Not for sale",
      title: item.volumeInfo?.title || "No title available",
      description: item.volumeInfo?.description || "No description available",
    };
  });
}
