import About from "@/components/about/About";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import HomePage from "@/components/homePage/HomePage";
import Pricing from "@/components/pricing/Pricing";
import Testimonial from "@/components/testimonial/Testimonial";
import TrustedBy from "@/components/trustedBy/TrustedBy";



export default function Home() {
  return (
<div className="flex !flex-col items-center ">
  <HomePage/>
  <About />
  <TrustedBy/>
  <Features />
  <Testimonial/>
  <Pricing/>
  <Footer/>
</div>
  );
}