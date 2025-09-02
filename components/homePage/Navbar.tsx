"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav className="w-full text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-16">
          <div className="flex items-center">
            <Image src="/scout.svg" width={120} height={100} alt="scout" />
          </div>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link key={link.name} href={link.href} >
                <span className="cursor-pointer text-gray-300 hover:text-white transition">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex gap-3">
          <button className="px-5 py-1.5 rounded-full bg-[#4d5259] border border-white/30 text-sm text-white/80 hover:bg-white/10 transition">
            Login
          </button>
          <button className="px-5 py-1.5 rounded-full bg-[#faf0f8] text-sm text-black font-medium hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? (
            <XMarkIcon className="w-7 h-7 text-white" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col border-t border-white/10 px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              <span className="cursor-pointer text-gray-300 hover:text-white transition">
                {link.name}
              </span>
            </Link>
          ))}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 px-5 py-2 rounded-full border border-white/30 text-sm text-white/80 hover:bg-white/10 transition">
              Login
            </button>
            <button className="flex-1 px-5 py-2 rounded-full bg-white text-sm text-black font-medium hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
