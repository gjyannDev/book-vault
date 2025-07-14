import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import CallToActionFooter from "./components/pages/CallToActionFooter";
import Footer from "./components/pages/Footer";
import useCurrentUser from "./hooks/useCurrentUser";
import { simplifiedAccountDetails } from "./lib/transformer";
import type { AccountInfo } from "./types/authTypes";

function App() {
  const { user } = useCurrentUser();
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null);
  const [cartItemCount, setCartItemCount] = useState<number>(0);

  useEffect(() => {
    if (user) {
      setAccountInfo(simplifiedAccountDetails(user));
    }
  }, [user]);
  return (
    <>
      <NavBar user={user} cartItemCount={cartItemCount} />
      <div className="container flex flex-col gap-24 mx-auto px-4 sm:px-8 lg:px-14 text-[var(--primary-text)]">
        <Outlet context={{ accountInfo, setCartItemCount }} />
      </div>
      <CallToActionFooter />
      <Footer />
    </>
  );
}

export default App;
