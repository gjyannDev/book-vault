import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export function getUserRef() {
  const user = auth.currentUser;
  return user ? doc(db, "users", user.uid) : null;
}

export function getCartRefDoc(bookId: string) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");
  return doc(db, "users", user.uid, "cart", bookId);
}

export function getCartRefCol() {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");
  return collection(db, "users", user.uid, "cart");
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
