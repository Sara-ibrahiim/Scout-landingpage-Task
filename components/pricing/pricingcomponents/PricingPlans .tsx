"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const PricingPlans = () => {
  return (
    <section className="w-full m-auto rounded-xl">
      <h2 className="text-center text-4xl font-semibold">
        A plan for every need.
      </h2>
      <p className="text-center text-[#828386] my-10 max-w-2xl mx-auto text-xl">
        Whether you are just starting or require massive scale, we have a
        solution.
      </p>

      <div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto">
        <div className="col-span-12 md:col-span-4 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(27,27,27,0)_0%,rgba(27,27,27,0)_49.48%),radial-gradient(50%_50%_at_50%_50%,rgba(12,207,113,0.1)_0%,rgba(0,0,0,0)_100%)] rounded-xl p-6 flex flex-col border-0 md:border md:border-[rgba(255,255,255,0.06)] mx-auto max-w-lg">
          <div className="flex my-3">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[linear-gradient(0deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)),linear-gradient(92deg,rgba(130,97,226,0.2)_15.83%,rgba(23,23,23,0.2)_63.01%)] border border-white/30 text-sm text-white/80 hover:bg-white/10 transition">
              <Image
                src="/pricing/hoppy.svg"
                alt="icon5"
                width={20}
                height={20}
              />
              <span className="text-green-400 text-sm font-semibold">
                HOBBY
              </span>
            </button>
          </div>

          <h3 className="text-4xl font-bold mb-4">$0</h3>
          <p className="text-sm text-gray-400 mb-6 leading-[20.8px] text-center md:text-left">
            Great for personal use or a first step to explore the Scout
            platform.
          </p>
          <button className="bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(222,222,222,0.08)_100%)] text-white rounded-full px-6 py-2 mb-6 hover:opacity-90 transition mx-auto md:mx-0">
            Sign Up
          </button>
          <ul className="space-y-5 text-sm text-gray-300">
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>100 Interactions (GPT-3.5 Only)</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Deploy 1 App</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Connect 1 Collection</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>10GB of Storage</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Community Support (Discord)</span>
            </li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-4 my-2 md:my-0 backdrop-blur-[30px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(27,27,27,0)_0%,#1B1B1B_49.48%),radial-gradient(50%_50%_at_50%_50%,rgba(195,140,245,0.2)_0%,rgba(26,26,26,0.2)_100%)] rounded-xl p-6 flex flex-col relative border-0 md:border md:border-[rgba(255,255,255,0.06)] mx-auto max-w-lg">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[linear-gradient(37deg,rgba(195,140,245,0.28)_11.56%,rgba(0,0,0,0)_86.3%),linear-gradient(222deg,rgba(255,255,255,0.2)_8.7%,rgba(0,0,0,0)_37.9%)] text-white text-xs font-medium px-3 py-1 rounded-full">
            MOST POPULAR
          </span>

          <div className="flex my-3">
            <button className="flex items-center gap-2 px-3 py-2 rounded-full  bg-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)),linear-gradient(92deg,rgba(192,112,216,0.3)_15.83%,rgba(23,23,23,0.3)_63.01%),radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] border border-white/30 text-sm text-white/80 hover:bg-white/10 transition">
              <Image
                src="/pricing/pro.svg"
                alt="icon5"
                width={20}
                height={20}
              />
              <span className="text-purple-400 text-sm font-semibold ">
                PRO
              </span>
            </button>
          </div>

          <h3 className="text-4xl font-bold mb-4">$50</h3>
          <p className="text-sm text-gray-400 mb-6 leading-[20.8px] text-center md:text-left">
            Perfect for building and scaling models with limited context.
          </p>
          <button className="bg-white text-black rounded-full px-6 py-2 mb-6 hover:opacity-90 transition mx-auto md:mx-0">
            Sign Up
          </button>
          <ul className="space-y-5 text-sm text-gray-300">
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Unlimited Interactions</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>$0.09 per Interaction</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Deploy 10 Apps</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Connect 10 Collections</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>1TB of Storage</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Community & Email Support</span>
            </li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-4 bg-[#0F0F0F] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(92,124,230,0.15)_0%,rgba(0,0,0,0)_100%)] rounded-xl p-6 flex flex-col border-0 md:border md:border-[rgba(255,255,255,0.06)] mx-auto max-w-lg">
          <div className="flex my-3">
            <button className="flex items-center gap-2 px-3 py-2 rounded-full  bg-[linear-gradient(0deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)),linear-gradient(92deg,rgba(94,106,210,0.2)_15.83%,rgba(23,23,23,0.2)_63.01%)] border border-white/30 text-sm text-white/80 hover:bg-white/10 transition">
              <Image
                src="/pricing/ent.svg"
                alt="icon5"
                width={20}
                height={20}
              />
              <span className="text-blue-400 text-sm font-semibold ">
                ENTERPRISE
              </span>
            </button>
          </div>

          <h3 className="text-4xl font-bold mb-4">Custom</h3>
          <p className="text-sm text-gray-400 mb-6 leading-[20.8px] text-center md:text-left">
            For large scale models with large and ever-changing context.
          </p>
          <button className="text-white bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(222,222,222,0.08)_100%)] rounded-full px-6 py-2 mb-6 hover:opacity-90 transition mx-auto md:mx-0">
            Request Access
          </button>
          <ul className="space-y-5 text-sm text-[#E2E8F0]">
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Unlimited Interactions</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Custom Interaction Pricing</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Unlimited Apps</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Unlimited Collections</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Unlimited Storage</span>
            </li>
            <li className="flex items-center gap-1 justify-center md:justify-start">
              <CheckCircle2 className="w-[21px] text-[#434343]" />
              <span>Dedicated Support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
