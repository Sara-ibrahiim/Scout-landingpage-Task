import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <section
      id="features"
      className="scroll-mt-24 border-y border-[1px] border-[#1F1F1F]"
    >
      <div className="py-[20px] md:py-[120px] flex flex-col gap-[2px]">
        <div className="grid grid-cols-14 max-w-6xl mx-auto w-full">
          <div className="hidden md:block md:col-span-1"></div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <Image
              src="/AI/work.svg"
              alt="work"
              width={500}
              height={500}
              className="w-auto h-auto object-contain mx-auto"
            />
          </div>
          <div className="col-span-12 md:col-span-3 flex items-center justify-center">
            <Image
              src="/AI/accese.svg"
              alt="accese"
              width={500}
              height={500}
              className="w-auto h-auto object-contain mx-auto"
            />
          </div>
          <div className="col-span-12 md:col-span-3 flex items-center justify-center">
            <Image
              src="/AI/build.svg"
              alt="build"
              width={500}
              height={500}
              className="w-auto h-auto object-contain mx-auto"
            />
          </div>
          <div className="hidden md:block md:col-span-1"></div>
        </div>

        <div className="grid grid-cols-14 max-w-6xl mx-auto w-full mt-2">
          <div className="hidden md:block md:col-span-1"></div>
          <div className="col-span-12 md:col-span-3 flex items-center justify-center">
            <Image
              src="/AI/feat.svg"
              alt="User"
              width={500}
              height={500}
              className="w-auto h-auto object-contain mx-auto"
            />
          </div>
          <div className="col-span-12 md:col-span-3 flex items-center justify-center">
            <Image
              src="/AI/product.svg"
              alt="User"
              width={500}
              height={500}
              className="w-auto h-auto object-contain mx-auto"
            />
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <Image
              src="/AI/inbox.svg"
              alt="User"
              width={500}
              height={500}
              className="w-auto h-auto object-contain mx-auto"
            />
          </div>
          <div className="hidden md:block md:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
