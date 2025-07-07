import type { AddFavoriteProps } from "@/types/bookTypes";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase/fireBaseClient";

export async function addFavorite(params: AddFavoriteProps) {
  try {
    const ref = doc(db, "users", params.userId);
    const res = await updateDoc(ref, { favorites: arrayUnion(params) });

    return res;
  } catch (error) {
    console.error(error);
  }
}
