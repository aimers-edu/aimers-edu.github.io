"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#courses", label: "Courses" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4">
        <div className="navbar rounded-2xl px-5 py-4 shadow-lg sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#hero"
              className="flex min-w-0 items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/images/logo.png"
                alt="AIMERS Logo"
                width={318}
                height={461}
                priority
                className="h-14 w-auto shrink-0"
              />
              <span className="text-3xl font-bold text-orange-400 sm:text-4xl">
                AIMERS
              </span>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex size-11 items-center justify-center rounded-lg text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400 md:hidden"
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="sr-only">Menu</span>
              <svg
                aria-hidden="true"
                className="size-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen ? (
            <nav
              id="mobile-menu"
              className="mt-4 flex flex-col rounded-lg bg-blue-950/50 py-2 md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-4 py-2 text-white transition hover:bg-blue-800/50 hover:text-orange-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
