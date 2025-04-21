"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavProps {
  children?: React.ReactNode;
}

const links = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/aboutme" },
  { name: "Art Work", href: "/artwork" },
  { name: "Sale & Auction", href: "/auction" },
  { name: "Art & Charity", href: "/charity" },
];

export function Nav({ children }: NavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 px-4 sm:px-8 leading-9 text-lg sm:text-2xl fixed z-50 top-0 right-0 backdrop-blur-2xl rounded-bl-3xl bg-white/30 border-b-2 border-gray-200 w-full sm:w-auto">
      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-2 sm:space-x-4">
        {links.map((link) => {
          const activeStyle =
            pathname === link.href
              ? "custom-nav-active bg-white/60 text-[#518224]"
              : "";
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-600 flex justify-center hover:shadow-md px-2 sm:px-4 py-1 sm:py-2 rounded-[10px] hover:bg-white/60 hover:text-[#518224] ${activeStyle}`}>
              <p>{link.name}</p>
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center justify-between">
        <div className="text-gray-700 text-[36px] vogue">HAANH-folio</div>
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md text-gray-600 hover:text-[#518224] focus:outline-none">
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 right-0 w-full bg-white/90 backdrop-blur-md border-b-2 border-gray-200 rounded-b-2xl">
          <div className="px-4 py-2 space-y-2">
            {links.map((link) => {
              const activeStyle =
                pathname === link.href
                  ? "custom-nav-active bg-white/60 text-[#518224]"
                  : "";
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-gray-600 hover:shadow-md px-4 py-2 rounded-[10px] hover:bg-white/60 hover:text-[#518224] ${activeStyle}`}
                  onClick={toggleMenu}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
      {children}
    </nav>
  );
}
