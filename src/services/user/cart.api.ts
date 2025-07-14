import type { CartProps, UpdateCartProps } from "@/types/bookTypes";
import { deleteDoc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { getCartRefCol, getCartRefDoc } from "../lib/firebase/fireBaseClient";

export async function addCart(params: CartProps) {
  try {
    const ref = getCartRefDoc(params.id);

    if (!ref) {
      throw new Error("User is not logged in.");
    }

    const existingDoc = await getDoc(ref);
    let newQuantity = 1;
    let newTotal = params.price;

    if (existingDoc.exists()) {
      const existingData = existingDoc.data();
      newQuantity = existingData.quantity + 1;
      newTotal = newQuantity * params.price;
    }

    const updatedData = {
      ...params,
      quantity: newQuantity,
      total: newTotal,
    };

    const res = await setDoc(ref, updatedData, { merge: true });

    return res;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return false;
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
