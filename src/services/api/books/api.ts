import { api } from "@/services/lib/api/axiosClient";

const apiKey = import.meta.env.VITE_GOOGLE_BOOK_API_KEY;

export async function getBookByCategory(query: string, startIndex: number = 0) {
  try {
    const res = await api.get("", {
      params: {
        q: `subject:${query}`,
        startIndex,
        maxResults: 16,
        key: apiKey,
        orderBy: "newest",
        filter: "paid-ebooks",
        language: "en",
      },
    });

    return {
      items: res.data.items ?? [],
      totalItems: res.data.totalItems || 0,
    };
  } catch (error) {
    console.error("Google Books API error:", error);
    return null;
  }
}
