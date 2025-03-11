"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Search, SearchCheckIcon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed left-0 top-0  z-50 w-full ${
        isScrolled ? "backdrop-blur-lg bg-white shadow-sm" : " bg-white"
      }`}
    >
      <div
        id="navbar"
        className="container relative mx-auto p-4 flex items-center"
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/dailyMuseBlue.png"
            alt="logo"
            width={130}
            height={70}
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Menu navigasi di kanan */}
        <div className="ml-auto space-x-4 hidden  md:flex items-center">
          <Link
            className="hover:text-[#004DE8] font-semibold hover:underline pointer-events-auto"
            href="/"
          >
            Home
          </Link>

          <Link
            className="hover:text-[#004DE8] font-semibold  hover:underline pointer-events-auto"
            href="/blogs"
          >
            Blog
          </Link>
          <Link
            className="hover:text-[#004DE8] font-semibold hover:underline pointer-events-auto"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-[#004DE8] font-semibold hover:underline pointer-events-auto"
            href="/category"
          >
            Category
          </Link>
          <Link
            className="hover:text-[#004DE8] font-semibold hover:underline pointer-events-auto"
            href="/blogs/list"
          >
            <Search />
          </Link>
          <Link href="/contact">
            <Button className="bg-[#004DE8] font-semibold hover:bg-[#7ba7ff]">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="md:hidden ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 border rounded">☰</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <Link href="/">Home</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/blogs">Blogs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/category">Category</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
