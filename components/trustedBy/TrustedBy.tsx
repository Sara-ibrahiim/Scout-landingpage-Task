"use client";
import React from "react";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <section id="blog" className="text-white py-20">
      <div className="w-full max-w-8xl mx-auto  border border-[#1F1F1F]">
        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-6 border-t border-b border-[#1F1F1F]">
          {/* Empty left cell (desktop only) */}
          <div className="hidden lg:flex items-center justify-center min-h-[140px]"></div>

          <div className="flex items-center justify-center min-h-[140px] border-l border-[#1F1F1F] p-6">
            <Image
              src="/trust/statsig.svg"
              alt="Statsig"
              width={120}
              height={60}
              className="object-contain max-w-[100px]"
            />
          </div>
          <div className="flex items-center justify-center min-h-[140px] border-l border-[#1F1F1F] p-6">
            <Image
              src="/trust/deno.svg"
              alt="Deno"
              width={120}
              height={60}
              className="object-contain max-w-[100px]"
            />
          </div>
          <div className="flex items-center justify-center min-h-[140px] border-l border-[#1F1F1F] p-6">
            <Image
              src="/trust/model.svg"
              alt="Model"
              width={120}
              height={60}
              className="object-contain max-w-[100px]"
            />
          </div>
          <div className="flex items-center justify-center min-h-[140px] border-l border-r border-[#1F1F1F] p-6">
            <Image
              src="/trust/hyber.svg"
              alt="Hyper"
              width={120}
              height={60}
              className="object-contain max-w-[100px]"
            />
          </div>

          <div className="hidden md:flex items-center justify-center min-h-[140px]"></div>
        </div>

        <p className="font-inter font-medium text-[14px] sm:text-[18px] md:text-[28px] leading-[20px] sm:leading-[28px] md:leading-[38px] tracking-[-1px] text-center max-w-5xl mx-auto my-14 px-4 sm:px-0">
          Used by teams at Statsig, Deno,
          <br className="hidden md:block" />
          Dagster, Evidence and more.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-6 border-t border-b border-[#1F1F1F]">
          <div className="hidden lg:flex items-center justify-center min-h-[140px]"></div>

          <div className="flex items-center justify-center min-h-[140px] border-l border-[#1F1F1F] p-6">
            <Image
              src="/trust/evi.svg"
              alt="Evidence"
              width={120}
              height={60}
              className="object-contain max-w-[100px]"
            />
          </div>
          <div className="flex items-center justify-center min-h-[140px] border-l border-[#1F1F1F] p-6">
            <Image
              src="/trust/dagstar.svg"
              alt="Dagstar"
              width={120}
              height={60}
              className="object-contain max-w-[100px]"
            />
          </div>
          <div className="flex items-center justify-center min-h-[140px] border-l border-[#1F1F1F] p-6">
            <Image
              src="/trust/case.svg"
              alt="Case Status"
              width={120}
              height={60}
              className="object-contain max-w-[100px]"
            />
          </div>
          <div className="flex items-center justify-center min-h-[140px] border-l border-r border-[#1F1F1F] p-6">
            <Image
              src="/trust/big.svg"
              alt="DG South"
              width={120}
              height={60}
              className="object-contain max-w-[100px]"
            />
          </div>

          {/* Empty right cell (desktop only) */}
          <div className="hidden md:flex items-center justify-center min-h-[140px]"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
