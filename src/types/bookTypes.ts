import { signInSchema } from "@/schemas/auth.schemas";
import type { User } from "firebase/auth";
import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import type { z } from "zod";

export interface BookInfo {
  id: string;
  image: string;
  price: string;
  title: string;
  description: string;
  authors: string[];
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
  variant?: "standard" | "featured" | "compact";
  isLoading: boolean;
  category: string;
}

export interface BookFilter {
  setBooks: React.Dispatch<React.SetStateAction<BookInfo[]>>;
  books: BookInfo[];
}

export interface MinMaxPriceRange {
  min: number;
  max: number;
}

export type TSignInSchema = z.infer<typeof signInSchema>;

export interface AuthFormProps {
  handleSubmit: UseFormHandleSubmit<TSignInSchema>;
  onSubmit: SubmitHandler<TSignInSchema>;
  register: UseFormRegister<TSignInSchema>;
  errors: FieldErrors<TSignInSchema>;
  isSubmitting: boolean;
  formType: string;
}

export interface UserType {
  user: User | null;
}

export interface AccountInfo {
  email: string | null;
  profileName: string | null;
  imageUrl: string | null;
}

export interface AccountData {
  uid: string;
  accessToken: string;
  displayName: string;
  userEmail: string;
  photoUrl: string;
}
