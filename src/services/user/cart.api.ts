import type { CartProps } from "@/types/bookTypes";
import { arrayUnion, setDoc } from "firebase/firestore";
import { getUserRef } from "../lib/firebase/fireBaseClient";

export async function addCart(params: CartProps) {
  try {
    const ref = getUserRef();

    if (!ref) {
      throw new Error("User is not logged in.");
    }

    const res = await setDoc(
      ref,
      {
        cart: arrayUnion(params),
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error(error);
  }
}
