import { Outlet } from "react-router-dom";
import CallToActionFooter from "./components/layout/CallToActionFooter";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container flex flex-col gap-24 mx-auto px-4 sm:px-8 lg:px-14">
        <Outlet />
      </div>
      <CallToActionFooter />
      <Footer />
    </>
  );
}

export default App;
