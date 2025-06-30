import { Outlet } from "react-router-dom";
import CallToActionFooter from "./components/pages/CallToActionFooter";
import Footer from "./components/pages/Footer";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container flex flex-col gap-24 mx-auto px-4 sm:px-8 lg:px-14 text-[var(--primary-text)]">
        <Outlet />
      </div>
      <CallToActionFooter />
      <Footer />
    </>
  );
}

export default App;
