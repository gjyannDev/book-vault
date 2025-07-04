import { signInSchema } from "@/schemas/auth.schemas";
import type { UserCredential, User} from "firebase/auth";
import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import type { z } from "zod";

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

export interface AuthApiTypes {
  email: string;
  password: string;
}

export interface AuthErrorType {
  success: boolean;
  field: "email" | "password" | "root";
  message: string;
}

export interface AuthSuccessType {
  success: true;
  data: UserCredential
};

export type AuthResultType = AuthSuccessType | AuthErrorType;
