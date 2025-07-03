import { getSigninCodeError } from "@/lib/utils/auth/auth.utils";
import { auth } from "@/services/lib/firebase/fireBaseClient";
import type { AuthApiTypes, AuthResultType } from "@/types/bookTypes";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export async function createNewUser({ email, password }: AuthApiTypes) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function signOutUser() {
  try {
    const res = await signOut(auth);
    const timestamp = new Date().toISOString();
    console.info(`[Sign Out] ✅ Success at ${timestamp}`);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function signInUser({
  email,
  password,
}: AuthApiTypes): Promise<AuthResultType> {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    return {
      success: true,
      data: res,
    };
  } catch (error) {
    const api_error = error as { code: string; message: string };

    return getSigninCodeError(api_error.code, api_error.code);
  }
}
