"use client";

import Image from "next/image";

export default function NavbarAbout() {
  return (
    <nav className="w-full bg-[#111111] border-b border-[#222] flex items-center justify-between px-4 py-5">
      <div className="flex items-center gap-2">
        <Image
          src="/sidebar/Acme.svg"
          alt="Logo"
          width={20}
          height={20}
          className="rounded-full"
        />
        <span className="text-sm text-white">Statsbot</span>
      </div>

      <div className="flex-1"></div>

      <div className="flex items-center gap-4">
        <Image src="/navbar/msg.svg" alt="icon1" width={20} height={20} />
        <Image src="/navbar/clan.svg" alt="icon2" width={20} height={20} />
        <Image src="/navbar/clock.svg" alt="icon3" width={20} height={20} />
        <Image src="/navbar/date.svg" alt="icon4" width={20} height={20} />
        <Image src="/navbar/alram.svg" alt="icon5" width={20} height={20} />
      </div>
    </nav>
  );
}
