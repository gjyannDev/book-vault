import { getSigninCodeError } from "@/lib/utils/auth/auth.utils";
import { auth, db } from "@/services/lib/firebase/fireBaseClient";
import type {
  AuthApiTypes,
  AuthCreateProfileParams,
  AuthResultType,
} from "@/types/authTypes";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function createNewUser({
  email,
  password,
}: AuthApiTypes): Promise<AuthResultType> {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    return {
      success: true,
      data: res,
      user: res.user,
    };
  } catch (error) {
    const api_error = error as { code: string; message: string };

    return getSigninCodeError(api_error.code, api_error.code);
  }
}

export async function signOutUser() {
  try {
    const res = await signOut(auth);

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
      user: res.user,
    };
  } catch (error) {
    const api_error = error as { code: string; message: string };

    return getSigninCodeError(api_error.code, api_error.code);
  }
}

export async function addUserProfile(params: AuthCreateProfileParams) {
  try {
    const profile_ref = doc(db, "users", params.uid);
    const res = await setDoc(
      profile_ref,
      {
        profile: params,
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error(error);
  }
}
