import Navbar from "./componentsAbout/navbar";
import ProfileInput from "./componentsAbout/ProfileInput";
import ProfileOutput from "./componentsAbout/ProfileOutput";
import Sidebar from "./componentsAbout/Sidebar";

const About = () => {
  return (
 <section className="md:px-[120px]">
  <div className="flex border border-[#1F1F1F]">
    <div className="w-48 border-r border-[#1F1F1F]">
      <Sidebar />
    </div>
    <div className="flex-1">
      <Navbar />
      <div className="grid grid-cols-12 gap-2 p-2">
        <div className="col-span-12 md:col-span-6">
          <ProfileInput />
        </div>
        <div className="col-span-12 md:col-span-6 overflow-hidden">
          <ProfileOutput />
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default About;
