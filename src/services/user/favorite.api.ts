import type { FavoriteProps } from "@/types/bookTypes";
import { arrayRemove, arrayUnion, getDoc, updateDoc } from "firebase/firestore";
import { getUserRef } from "../lib/firebase/fireBaseClient";

export async function addFavorite(params: FavoriteProps) {
  try {
    const ref = getUserRef();
    if (!ref) {
      throw new Error("User is not logged in.");
    }
    const res = await updateDoc(ref, { favorites: arrayUnion(params) });

    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function getFavorites() {
  try {
    const ref = getUserRef();
    if (!ref) {
      throw new Error("User is not logged in.");
    }
    const res = await getDoc(ref);
    const data = res.data();

    return data?.favorites || [];
  } catch (error) {
    console.error(error);
  }
}

export async function removeFavorite(data: FavoriteProps) {
  try {
    const ref = getUserRef();
    if (!ref) {
      throw new Error("User is not logged in.");
    }
    const res = await updateDoc(ref, { favorites: arrayRemove(data) });

    return res;
  } catch (error) {
    console.error(error);
  }
}
