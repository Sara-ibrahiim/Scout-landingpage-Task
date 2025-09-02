import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <section className="scroll-mt-24  md:ps-15">
      <div className="py-[20px] md:p-[120px] max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-[2px]">
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-5">
            <Image
              src="/AI/work.svg"
              alt="work"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-3">
            <Image
              src="/AI/accese.svg"
              alt="accese"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-3">
            <Image
              src="/AI/build.svg"
              alt="build"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-3">
            <Image
              src="/AI/feat.svg"
              alt="feat"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-3">
            <Image
              src="/AI/product.svg"
              alt="product"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-5">
            <Image
              src="/AI/inbox.svg"
              alt="inbox"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
