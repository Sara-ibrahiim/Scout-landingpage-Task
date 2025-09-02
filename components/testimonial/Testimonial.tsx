"use client";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section
      id="docs"
      className="scroll-mt-24 px-6 py-16 md:p-[120px] text-white border-y border-white/10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[120px_1fr_120px] border border-[#1F1F1F]/60 rounded-xl overflow-hidden">
        {/* Left column */}
        <div className="hidden md:grid grid-rows-3 border-r border-[#1F1F1F]/60">
          <div className="flex items-center justify-center border-b border-[#1F1F1F]/60 h-[120px]">
            <Image src="/testimonial/row.svg" alt="row" width={28} height={28} />
          </div>
          <div className="flex items-center justify-center border-b border-[#1F1F1F]/60 h-[120px]">
            <Image src="/testimonial/ocq.svg" alt="icon" width={28} height={28} />
          </div>
          <div className="flex items-center justify-center h-[120px]">
            <Image src="/testimonial/tube.svg" alt="youtube" width={28} height={28} />
          </div>
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center px-6 md:px-16 py-6 text-center">
          <p className="font-inter font-medium mx-4 md:mx-12 text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-relaxed md:leading-[42px] tracking-tight max-w-xl">
            "Scout is an indispensable tool for our Engineering, DS and Sales
            teams to engage with our customers. We rely on Scout daily, making
            it an integral part of our operations."
          </p>
          <div className="mt-10">
            <Image
              src="/testimonial/person.png"
              alt="CEO"
              width={56}
              height={56}
              className="rounded-full mx-auto"
            />
            <p className="mt-3 font-medium">Vijaye Raji</p>
            <p className="text-gray-400 text-sm">CEO of Statsig</p>
          </div>
        </div>

        {/* Right column */}
        <div className="hidden md:grid grid-rows-3 border-l border-[#1F1F1F]/60">
          <div className="flex items-center justify-center border-b border-[#1F1F1F]/60 h-[120px]">
            <Image src="/testimonial/group.svg" alt="group" width={28} height={28} />
          </div>
          <div className="flex items-center justify-center border-b border-[#1F1F1F]/60 h-[120px]">
            <Image src="/testimonial/bag.svg" alt="bag" width={28} height={28} />
          </div>
          <div className="flex items-center justify-center h-[120px]">
            <Image src="/testimonial/clip.svg" alt="icon" width={28} height={28} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
