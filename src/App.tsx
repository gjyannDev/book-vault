import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import CallToActionFooter from "./components/pages/CallToActionFooter";
import Footer from "./components/pages/Footer";
import { simplifiedAccountDetails } from "./lib/transformer";
import { auth } from "./services/lib/firebase/fireBaseClient";
import type { AccountInfo } from "./types/bookTypes";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      setAccountInfo(simplifiedAccountDetails(user));
    }
  }, [user]);

  return (
    <>
      <NavBar user={user} />
      <div className="container flex flex-col gap-24 mx-auto px-4 sm:px-8 lg:px-14 text-[var(--primary-text)]">
        <Outlet context={{ accountInfo }} />
      </div>
      <CallToActionFooter />
      <Footer />
    </>
  );
}

export default App;
