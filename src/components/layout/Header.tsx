// src/components/layout/Header.tsx
"use client";

import { useState } from "react";
import HamburgerButton from "../common/HamburgerButton";

const menuItems = [
  { label: "Book now", href: "#booking" },
  { label: "Services", href: "#services" },
  { label: "Masters", href: "#masters" },
  { label: "Our work", href: "#work" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);

    // optional smooth scroll for same-page links
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };


  return (
    <>
      {/* Floating hamburger in the top-right corner */}
      <header className="fixed top-0 right-0 z-40 p-4">
        <HamburgerButton onClick={() => setIsOpen(true)} />
      </header>

      {/* Dark overlay behind the menu (click to close) */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        />
      )}

      {/* Slide-in panel */}
      <nav
        className={`
          fixed top-0 right-0 z-50 h-full w-64 max-w-[80vw]
          bg-orange-50/90 shadow-xl border-l border-orange-300/80
          transform transition-transform duration-300 flex flex-col 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Top of the panel */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-orange-300/80">
          <span className="text-sm font-semibold tracking-wide">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-orange-300 transition"
          >
            <span className="sr-only">Close navigation</span>
            <div className="relative block h-4 w-4">
              <span className="absolute inset-0 block h-0.5 w-full bg-slate-800 rotate-45 rounded" />
              <span className="absolute inset-0 block h-0.5 w-full bg-slate-800 -rotate-45 rounded" />
            </div>
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-2 px-4 py-6 text-sm">
          {menuItems.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => handleLinkClick(item.href)}
                className="
                  w-full text-left
                  rounded-full px-3 py-2
                  hover:bg-orange-100 text-slate-900
                "
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Login / profile section */}
        <div className="px-4 pb-4">
          <a
            href="/login"  // you can change this path later
            className="
              mt-2 inline-flex w-full items-center justify-center
              rounded-md border border-orange-300 text-slate-900 font-medium
              text-orange-300 bg-transparent
              hover:bg-orange-100
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            Log in
          </a>
        </div>

        {/* Optional subtle footer in menu */}
        <div className="mt-auto px-4 py-3 text-xs text-slate-500 border-t border-orange-300/80">
          <p>Online booking · 24/7</p>
          <a
            href="https://www.instagram.com/bargo.nails/"
            target="_blank"
            rel="noreferrer"
            className="text-orange-300 hover:underline"
          >
            Instagram
          </a>
        </div>
      </nav>
    </>
  );
}




