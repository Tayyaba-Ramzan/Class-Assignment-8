"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-md z-50">
      <div className="flex items-center space-x-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={180}
          height={180}
          className="hidden sm:block mb-6"
        />

        {/* Discover Pakistan */}
        <Link
          href="/"
          className="text-blue-900 italic text-2xl md:text-3xl font-extrabold tracking-wide flex items-center underline"
        >
          Discover Pakistan
        </Link>
      </div>

      <div className="hidden md:flex space-x-6 text-blue-950 text-sm font-medium">
        <Link
          href="/"
          className="hover:text-slate-950 transition hover:underline"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-slate-950 transition hover:underline"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-slate-950 transition hover:underline"
        >
          Contact
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          aria-label="Toggle menu"
          className="text-gray-600 focus:outline-none hover:text-blue-950"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-4 items-center transition-transform transform duration-300 ease-in-out">
          <Link
            href="/"
            className="hover:text-slate-950 transition text-lg font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-slate-950 transition text-lg font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-slate-950 transition text-lg font-medium"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
