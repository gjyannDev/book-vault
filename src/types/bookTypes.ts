export interface BookInfo {
  id: string;
  image: string;
  price: string;
  title: string;
  description: string;
  authors: string[];
  category: string;
}

export interface RawData {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
    pageCount: number;
    categories: string[];
    averageRating: string;
  };
  saleInfo: {
    saleability: string;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
  };
}

export interface PaginationCard {
  totalItems: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  maxResults: number;
}

export interface ShopCardProps {
  bookInfo: BookInfo[];
  variant?: "standard" | "featured" | "compact" | "favorite";
  isLoading?: boolean;
  category?: string;
  baseRoute?: string;
  backRoute: string;
}

export interface BookFilter {
  setBooks: React.Dispatch<React.SetStateAction<BookInfo[]>>;
  books: BookInfo[];
}

export interface MinMaxPriceRange {
  min: number;
  max: number;
}

export interface FavoriteButtonProps {
  buttonVariant: "card" | "details" | "favorite";
  books: BookInfo[];
  bookId?: string;
  category?: string;
  variant?: string;
}

export interface FavoriteProps {
  userId: string;
  id: string;
  authors: string[];
  description: string;
  image: string;
  price: string;
  title: string;
}
