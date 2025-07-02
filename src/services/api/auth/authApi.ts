import { auth } from "@/services/lib/firebase/fireBaseClient";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export async function createNewUser(email: string, password: string) {
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

export async function signInUser(email: string, password: string) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    return res;
  } catch (error) {
    console.error(error);
  }
}
