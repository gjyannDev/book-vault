import { auth } from "@/services/lib/firebase/fireBaseClient";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function createNewUser(email: string, password: string) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    console.log("User signed in:", user);
    return res;
  } catch (error) {
    console.error(error);
  }
}
