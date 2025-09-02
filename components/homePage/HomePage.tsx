import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full [background:radial-gradient(circle_at_center,rgba(80,200,140,0.06)_0%,transparent_70%),radial-gradient(circle_at_right_center,rgba(220,120,180,0.05)_0%,transparent_65%),radial-gradient(circle_at_center_top,rgba(150,160,180,0.08)_0%,rgba(10,10,12,1)_100%),#0a0a0c]">

      <div className="">
    <Navbar />
      <section className="min-h-screen w-full text-center py-24  text-white flex flex-col items-center justify-center">
        <div className="px-4 flex flex-col items-center">
          <span className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-[rgba(255,255,255,0.04)] text-white/70">
            <Image
              src="/scout.svg"
              alt="scout"
              width={65}
              height={25}
              className="object-contain mt-1"
            />
            <span className="mx-2 leading-none flex items-center">
              is currently in beta
            </span>
            <ChevronRightIcon className="w-5 h-5" />
          </span>

          <h1 className="mt-6 text-6xl font-medium leading-tight bg-gradient-to-b from-[#FFFFFF] to-[#BABABA] bg-clip-text text-transparent text-center">
            AI for teams building <br /> what&apos;s next.
          </h1>

          <p className="mt-4 text-white/70 text-xl text-center max-w-2xl">
            Scout gives you the tools to build custom agents and workflows in
            record time.
          </p>

          <button className="mt-8 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition flex items-center gap-2">
            Get Started
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </section>
      </div>
  
    </div>
  );
};

export default HomePage;
