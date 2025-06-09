import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-full bg-[var(--bg-dark)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-6">
        <nav className="flex justify-between items-center">
          <div className="nav__left--content">
            <h1 className="text-3xl font-playfair-bold text-[var(--text-white)]">
              Boo<span className="text-[var(--primary-clr)]">kVault</span>
            </h1>
          </div>
          <div className="nav__middle--content">
            <ul className="hidden lg:flex md:gap-12">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="">Books</Link>
              </li>
              <li>
                <Link to="">About us</Link>
              </li>
              <li>
                <Link to="">Shop by Genre</Link>
              </li>
            </ul>
          </div>
          <div className="nav__right--content">
            <div className="menu__container lg:hidden">
              <Menu color="var(--base-white)" />
            </div>
            <div className="hidden lg:flex md:gap-6">
              <Link to="">
                <Search />
              </Link>
              <Link to="">
                <ShoppingCart />
              </Link>
              <Link to="">
                <Heart />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
