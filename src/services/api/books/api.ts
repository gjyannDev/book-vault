import { api } from "@/services/lib/api/axiosClient";

const apiKey = import.meta.env.VITE_GOOGLE_BOOK_API_KEY;

export async function getBookByCategory(query: string) {
  try {
    const res = await api.get("", {
      params: {
        q: `subject:${query}`,
        maxResults: 16,
        key: apiKey,
      },
    });

    return res.data.items ?? [];
  } catch (error) {
    console.error(error);
  }
}
