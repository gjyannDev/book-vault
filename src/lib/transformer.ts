import type { AccountInfo } from "@/types/authTypes";
import type { BookInfo, RawData } from "@/types/bookTypes";
import type { User } from "firebase/auth";

export function simplifiedGoogleBooks(rawData: RawData[]): BookInfo[] {
  return rawData.map((item) => {
    const amount = item.saleInfo?.listPrice?.amount;
    const currency = item.saleInfo?.listPrice?.currencyCode;
    return {
      id: item.id,
      image:
        item.volumeInfo?.imageLinks?.thumbnail ||
        item.volumeInfo?.imageLinks?.smallThumbnail ||
        "https://books.google.com/googlebooks/images/no_cover_thumb.gif",
      price: amount
        ? `${currency === "PHP" ? "₱" : currency || "$"} ${amount}`
        : "Not for sale",
      title: item.volumeInfo?.title || "No title available",
      description: item.volumeInfo?.description || "No description available",
      authors: item.volumeInfo?.authors || "No Author",
      category: item.volumeInfo.categories.toString(),
    };
  });
}

export function simplifiedAccountDetails(user: User): AccountInfo {
  return {
    email: user?.email,
    profileName: user?.displayName,
    imageUrl: user?.photoURL,
  };
}
