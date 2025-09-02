import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <section id="features" className="scroll-mt-24  md:ps-15">
      <div className=" md:px-[60px] md:py-[80px] max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-[2px]">
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-5">
            <Image
              src="/AI/work.png"
              alt="work"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-3">
            <Image
              src="/AI/accese.png"
              alt="accese"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-3">
            <Image
              src="/AI/build.png"
              alt="build"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-3">
            <Image
              src="/AI/feat.png"
              alt="feat"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-3">
            <Image
              src="/AI/product.png"
              alt="product"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:bg-[#111] flex items-center justify-center h-[300px] col-span-12 md:col-span-5">
            <Image
              src="/AI/inbox.png"
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
