// src/components/layout/Header.tsx
"use client";

import HamburgerButton from "../common/HamburgerButton";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-40 p-4">
      <HamburgerButton />
    </header>
  );
}




