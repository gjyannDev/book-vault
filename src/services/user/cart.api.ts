import type {
  CartProps,
  UpdateCartProps,
} from "@/types/bookTypes";
import { deleteDoc, getDocs, setDoc } from "firebase/firestore";
import { getCartRefCol, getCartRefDoc } from "../lib/firebase/fireBaseClient";

export async function addCart(params: CartProps) {
  try {
    const ref = getCartRefDoc(params.id);

    if (!ref) {
      throw new Error("User is not logged in.");
    }

    const res = await setDoc(ref, params, { merge: true });

    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function getCartsData(): Promise<CartProps[]> {
  try {
    const ref = getCartRefCol();
    if (!ref) {
      throw new Error("User is not logged in.");
    }
    const res = await getDocs(ref);

    const cartItems: CartProps[] = res.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<CartProps, "id">),
    }));

    return cartItems;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function updateCartData(params: UpdateCartProps) {
  try {
    const ref = getCartRefDoc(params.bookId);

    const res = await setDoc(
      ref,
      {
        quantity: params.quantity,
        total: params.total,
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function removeCartData(bookId: string) {
  try {
    const ref = getCartRefDoc(bookId);
    const res = await deleteDoc(ref);

    return res;
  } catch (error) {
    console.error(error);
  }
}
