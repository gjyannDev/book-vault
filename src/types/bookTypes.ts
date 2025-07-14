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
  onTriggerRefetch?: () => void;
  cartBooks?: CartProps[];
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
  onTriggerFetch?: () => void;
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

export interface CartProps {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
}

export interface CartButtonProps {
  buttonVariant: "card" | "details" | "favorite" | "icon";
  books: BookInfo[];
  bookId?: string;
  category?: string;
  variant?: string;
  cartBooks?: CartProps[];
}

export interface CartBook {
  book: CartProps[];
}

export interface UpdateCartProps {
  bookId: string;
  total: number;
  quantity: number;
}

export interface EmptyStateProps {
  title: string;
  message: string;
  actionText: string;
  onActionClick: () => void;
}

export interface CartCounterProps {
  book: CartProps;
  onFetchTrigger: () => void;
  isLoading: boolean;
}
