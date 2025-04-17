"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  children?: React.ReactNode;
}

const links = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/aboutme" },
  { name: "Art Work", href: "/artwork" },
  { name: "Art & Charity", href: "/charity" },
];

export function Nav({ children }: NavProps) {
  const pathname = usePathname();
  return (
    <nav className="p-4 px-8 leading-9 text-2xl fixed z-2 top-0 right-0 backdrop-blur-2xl rounded-bl-3xl bg-white/30 border-b-2 border-b border-gray-200">
      <ul className="flex space-x-4">
        {links.map((link) => {
          const activeStyle = pathname === link.href ? "custom-nav-active" : "";
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-600 flex justify-center hover:shadow-md px-4 py-2 rounded-[10px] hover:bg-white/60 hover:text-purple-600  ${activeStyle}`}>
              <p>{link.name}</p>
            </Link>
          );
        })}
        {/* Add more links as needed */}
      </ul>
      {children}
    </nav>
  );
}
