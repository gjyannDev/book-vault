import clsx from "clsx";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="w-full bg-[var(--base-black)] text-[var(--text-white)]">
      <div
        className={clsx(
          "flex flex-col gap-8",
          "container mx-auto px-4",
          "sm:px-6 lg:px-12 xl:px-16 py-6"
        )}
      >
        <div className="">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <h1 className="font-playfair-bold text-4xl">BookVault</h1>
              <p className="font-lora-regular text-sm">
                Great reads. Great prices. Delivered to your door.
              </p>
            </div>
            <div className="flex items-center gap-5">
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
        </div>
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
        <Separator
          orientation="horizontal"
          className="bg-[var(--base-white)] w-0.5"
        />
        <div className="">
          <p className="font-lora-regular text-sm">
            Copyright 2025© BookVault. All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
