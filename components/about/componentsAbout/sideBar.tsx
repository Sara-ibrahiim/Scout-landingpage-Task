"use client";

import { useState } from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const mainLinks = [
  { label: "Inbox", icon: "/icons/phone.png" },
  { label: "Analytics", icon: "/icons/phone.png" },
  { label: "Collections", icon: "/icons/phone.png" },
  { label: "Integrations", icon: "/icons/phone.png" },
  { label: "Templates", icon: "/icons/phone.png" },
  { label: "Settings", icon: "/icons/phone.png" },
];

const apps = ["Statsbot", "Chief", "Docs", "Accounting"];

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#111] text-gray-200 w-64 p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-lg flex items-center gap-2">
          <Image src="/icons/phone.png" alt="Acme" width={20} height={20} />
          Acme
        </h2>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/icons/phone.png" alt="user" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      <nav className="space-y-2">
        {mainLinks.map((item, idx) => (
          <button
            key={idx}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 w-full text-sm"
          >
            <Image src={item.icon} alt={item.label} width={18} height={18} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="border-t border-gray-700 my-4"></div>

      <div className="flex-1">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>Apps</span>
          <Button size="icon" variant="ghost" className="h-6 w-6 text-gray-400">
            +
          </Button>
        </div>
        <div className="space-y-1">
          {apps.map((app, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 text-sm"
            >
              <input type="checkbox" className="accent-gray-500" />
              {app}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden md:flex">
        <SidebarContent />
      </div>

      <div className="md:hidden p-2">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              ☰
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
