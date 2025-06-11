import clsx from "clsx";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="w-full bg-[var(--base-black)] text-[var(--text-white)]">
      <div
        className={clsx(
          "flex flex-col gap-6",
          "container mx-auto px-4 py-8",
          "sm:px-6 lg:px-12 xl:px-16",
          "md:py-10 lg:gap-10 xl:py-12"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-8",
            "lg:flex-row lg:gap-28 xl:gap-64"
          )}
        >
          <div className="flex flex-col gap-5">
            <div className={clsx("flex flex-col gap-1.5", "md:gap-2.5")}>
              <h1
                className={clsx(
                  "font-playfair-bold text-4xl",
                  "md:text-5xl lg:text-6xl"
                )}
              >
                BookVault
              </h1>
              <p
                className={clsx(
                  "font-lora-regular text-sm",
                  "md:text-md md:max-w-60 lg:text-base"
                )}
              >
                Great reads. Great prices. Delivered to your door.
              </p>
            </div>
            <div
              className={clsx(
                "flex items-center gap-5 cursor-pointer",
                "lg:gap-7"
              )}
            >
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 hover:text-[var(--primary-clr)] transition-colors" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 hover:text-[var(--primary-clr)] transition-colors" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 hover:text-[var(--primary-clr)] transition-colors" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 hover:text-[var(--primary-clr)] transition-colors" />
              </a>
            </div>
          </div>
          <div
            className={clsx(
              "flex flex-col gap-8",
              "md:flex-row md:justify-between",
              "lg:w-full"
            )}
          >
            <div className="flex flex-col gap-4">
              <h1 className="font-lora-regular text-3xl">Shop</h1>
              <div className="">
                <ul className="font-lora-regular flex flex-col gap-2">
                  <li>
                    <Link to="">All books</Link>
                  </li>
                  <li>
                    <Link to="">Bestsellers</Link>
                  </li>
                  <li>
                    <Link to="">Fiction</Link>
                  </li>
                  <li>
                    <Link to="">Non - Fiction</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-lora-regular text-3xl">Categories</h1>
              <div className="">
                <ul className="font-lora-regular flex flex-col gap-2">
                  <li>
                    <Link to="">Fiction</Link>
                  </li>
                  <li>
                    <Link to="">Non - Fiction</Link>
                  </li>
                  <li>
                    <Link to="">Self - Help</Link>
                  </li>
                  <li>
                    <Link to="">Children's Books</Link>
                  </li>
                  <li>
                    <Link to="">Mystery</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-lora-regular text-3xl">Service</h1>
              <div className="">
                <ul className="font-lora-regular flex flex-col gap-2">
                  <li>
                    <Link to="">Privacy and Policy</Link>
                  </li>
                  <li>
                    <Link to="">Terms and Condition</Link>
                  </li>
                  <li>
                    <Link to="">Help Center</Link>
                  </li>
                  <li>
                    <Link to="">Shipping Info</Link>
                  </li>
                  <li>
                    <Link to="">Returns and Refunds</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Separator
            orientation="horizontal"
            className="bg-[var(--base-white)] w-0.5"
          />
          <div className="">
            <p className="font-lora-regular text-sm lg:text-base">
              Copyright 2025© BookVault. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
