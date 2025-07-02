import type { UserType } from "@/types/bookTypes";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

export default function NavBar({ user }: UserType) {
  return (
    <div className="w-full bg-[var(--bg-dark)]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 xl:px-16 py-6">
        <nav className="flex justify-between items-center">
          <div className="nav__left--content">
            <h1 className="text-3xl font-playfair-bold text-[var(--text-white)]">
              Boo<span className="text-[var(--primary-clr)]">kVault</span>
            </h1>
          </div>
          <div className="nav__middle--content hidden lg:flex">
            <NavMenu />
          </div>
          <div className="nav__right--content">
            <div className="menu__container lg:hidden">
              <Menu color="var(--base-white)" />
            </div>
            <div className="hidden lg:flex md:gap-6 text-[var(--base-white)]">
              <Link to="">
                <Search color="var(--base-white)" />
              </Link>
              <Link to="">
                <ShoppingCart color="var(--base-white)" />
              </Link>
              <Link to={user ? "/account" : "/signin"}>
                <User color="var(--base-white)" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
