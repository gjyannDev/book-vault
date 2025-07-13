import type { FavoriteProps } from "@/types/bookTypes";
import {
  deleteDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  getFavRefCol,
  getFavRefDoc,
} from "../lib/firebase/fireBaseClient";

export async function addFavorite(params: FavoriteProps) {
  try {
    const ref = getFavRefDoc(params.id);
    if (!ref) {
      throw new Error("User is not logged in.");
    }
    const res = await setDoc(ref, params, { merge: true });

    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function getFavorites() {
  try {
    const ref = getFavRefCol();
    if (!ref) {
      throw new Error("User is not logged in.");
    }
    const res = await getDocs(ref);

    const fav_books: FavoriteProps[] = res.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<FavoriteProps, "id">),
    }));

    return fav_books;
  } catch (error) {
    console.error(error);
  }
}

export async function removeFavorite(data: FavoriteProps) {
  try {
    const ref = getFavRefDoc(data.id);
    if (!ref) {
      throw new Error("User is not logged in.");
    }
    const res = await deleteDoc(ref);

    return res;
  } catch (error) {
    console.error(error);
  }
}
