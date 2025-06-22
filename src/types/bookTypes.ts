export interface BookInfo {
  image: string;
  price: string;
  title: string;
  description: string;
}

export interface RawData {
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
