import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

//TODO:Fix the color on the hover on the choice of the dropdown
export default function NavMenu() {
  return (
    <div>
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="flex gap-7 text-[var(--text-white)]">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className="hover:bg-transparent focus:bg-transparent active:bg-transparent">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
              Books
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-transparent shadow-none p-0">
              <ul className="grid w-[200px] gap-2 bg-transparent">
                <li className="flex flex-col gap-2">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/books/all"
                      className="text-[var(--primary-text)] hover:text-[red] hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    >
                      All books
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/books/bestseller"
                      className="text-[var(--primary-text)] hover:text-[var(--primary-clr)] hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    >
                      Bestsellers
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/books/fiction"
                      className="text-[var(--primary-text)] hover:text-[var(--primary-clr)] hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    >
                      Fiction
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/books/nonfiction"
                      className="text-[var(--primary-text)] hover:text-[var(--primary-clr)] hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    >
                      Non - Fiction
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/about"
                className="hover:bg-transparent focus:bg-transparent active:bg-transparent"
              >
                About us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
              Shop by Genre
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-transparent shadow-none p-0">
              <ul className="grid w-[200px] gap-2 bg-transparent">
                <li className="flex flex-col gap-2">
                  <NavigationMenuLink asChild>
                    <Link
                      to=""
                      className="text-[var(--primary-text)] hover:text-[var(--primary-clr)] hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    >
                      Fiction
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to=""
                      className="text-[var(--primary-text)] hover:text-[var(--primary-clr)] hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    >
                      Bestsellers
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to=""
                      className="text-[var(--primary-text)] hover:text-[var(--primary-clr)] hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    >
                      Children's
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to=""
                      className="text-[var(--primary-text)] hover:text-[var(--primary-clr)] hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    >
                      Non - Fiction
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
