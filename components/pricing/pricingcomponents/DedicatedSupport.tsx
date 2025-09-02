"use client";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const DedicatedSupport = () => {
  return (
    <section className="mt-4 w-full bg-[#0F0F0F] text-white p-4 sm:p-6 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
      <div className="flex-1 border border-[rgba(255,255,255,0.06)] rounded-xl p-4 sm:p-6 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(27,27,27,0)_0%,#1B1B1B_49.48%)]">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Dedicated Support</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6">
          We are here to help get you started with a dedicated support engineer
          who can assist with scoping your first models and getting them deployed.
        </p>

        <h3 className="text-xs text-gray-400 mb-2">WHAT’S INCLUDED</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm text-gray-200">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 sm:w-[21px] text-[#434343]" />
            Shared Slack Channel
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 sm:w-[21px] text-[#434343]" />
            Dedicated Support Engineer
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 sm:w-[21px] text-[#434343]" />
            Prompt Engineering Guidance
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 sm:w-[21px] text-[#434343]" />
            Context Sourcing Guidance
          </li>
        </ul>
      </div>

      <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(27,27,27,0)_0%,rgba(27,27,27,0.8)_100%),linear-gradient(0deg,rgba(12,10,11,0.5)_0%,rgba(12,10,11,0.5)_100%),radial-gradient(50%_50%_at_50%_50%,rgba(155,126,238,0.2)_0%,rgba(0,0,0,0)_100%)] rounded-xl p-6  w-full md:w-[280px] flex flex-col items-center justify-center text-center">
        <button className="flex px-4 py-2 rounded-full bg-[linear-gradient(0deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)),linear-gradient(92deg,rgba(130,97,226,0.2)_15.83%,rgba(23,23,23,0.2)_63.01%)] border border-white/30 text-sm text-white/80 hover:bg-white/10 transition">
          <Image src="/pricing/add.svg" alt="icon5" width={18} height={18} />
          <span className="ms-1">ADD ON</span>
        </button>

        <h3 className="text-3xl sm:text-4xl font-bold my-2">$750</h3>
        <p className="text-gray-400 text-xs sm:text-sm mb-3">monthly</p>
        <button className="bg-white text-black font-semibold rounded-full px-5 py-2 hover:opacity-90 transition">
          Request Access
        </button>
        <p className="text-[10px] sm:text-[11px] text-gray-500 mt-2">
          No long term contract obligation.
        </p>
      </div>
    </section>
  );
};

export default DedicatedSupport;
