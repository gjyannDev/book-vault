import type { AuthErrorType } from "@/types/bookTypes";

export function getSigninCodeError(
  errorCode: string,
  errorMessage: string
): AuthErrorType {
  switch (errorCode) {
    case "auth/user-not-found":
      return {
        success: false,
        field: "email",
        message: "User does not exist",
      };
    case "auth/invalid-credential":
      return {
        success: false,
        field: "password",
        message: "Email or password is incorrect",
      };
    default:
      return {
        success: false,
        field: "root",
        message: errorMessage || "Something went wrong",
      };
  }
}
