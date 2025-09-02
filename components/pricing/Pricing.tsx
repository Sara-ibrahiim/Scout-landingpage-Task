
import DedicatedSupport from "./pricingcomponents/DedicatedSupport";
import PricingPlans from "./pricingcomponents/PricingPlans ";

const Pricing = () => {
  return (
    
      <section id="pricing" className="w-full h-full py-[20px] md:py-[120px] border-x-custom bg-[linear-gradient(90deg,rgba(189,255,223,0.05)_0%,rgba(91,124,231,0.03)_33%,rgba(163,135,242,0.05)_66%,rgba(255,189,232,0.05)_100%)] ">
        <div className=" ">
          <div className=" border-y border-[1px] border-[#1F1F1F] p-[120px]">

           <PricingPlans/>

           <DedicatedSupport/>
          </div>
        </div>
      </section>
 
  );
};

export default Pricing;
