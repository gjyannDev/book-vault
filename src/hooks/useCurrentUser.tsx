import { auth } from "@/services/lib/firebase/fireBaseClient";
import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


  return {
    user,
    loading,
  };
}
