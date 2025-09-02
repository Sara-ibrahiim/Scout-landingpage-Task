"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const mainLinks = [
  { label: "Inbox", icon: "/sidebar/inbox.svg" },
  { label: "Analytics", icon: "/sidebar/anal.svg" },
  { label: "Collections", icon: "/sidebar/col.svg" },
  { label: "Integrations", icon: "/sidebar/int.svg" },
  { label: "Templates", icon: "/sidebar/tem.svg" },
  { label: "Settings", icon: "/sidebar/set.svg" },
];

const apps = ["Statsbot", "Chief", "Docs", "Accounting"];

function SideBarItem() {
  const [open, setOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full border-r-2 border-[#1F1F1F] text-gray-200 w-64 bg-transparent md:bg-transparent">
      <div className="flex items-center justify-between mb-6 py-4 px-2">
        <h2 className="flex items-center gap-2 font-semibold">
          <Image src="/sidebar/Acme.svg" alt="Acme" width={20} height={20} />
          <span className="text-sm">Acme</span>
        </h2>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/sidebar/person2.jpg" alt="user" />
        </Avatar>
      </div>

      <nav className="space-y-2">
        {mainLinks.map((item, idx) => (
          <button
            key={idx}
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800 w-full text-sm"
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="border-t border-gray-700 my-4 mx-4"></div>

      <div className="flex-1 px-4 pb-3">
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
              className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 text-sm"
            >
              {app === "Statsbot" ? (
                <Image
                  src="/sidebar/ac.svg"
                  alt="Statsbot"
                  width={18}
                  height={18}
                  className="w-5 h-5"
                />
              ) : (
                <input type="checkbox" className="accent-gray-500" />
              )}
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
          <SheetContent
            side="left"
            className="p-0 w-64 bg-black text-white border-r border-[#1F1F1F]"
          >
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default SideBarItem;
