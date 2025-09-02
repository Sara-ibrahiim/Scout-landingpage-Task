import NavbarAbout from "./componentsAbout/NavbarAbout";
import ProfileInput from "./componentsAbout/ProfileInput";
import ProfileOutput from "./componentsAbout/ProfileOutput";
import SideBarItem from "./componentsAbout/SideBarItem";


const About = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row border border-[#1F1F1F]">
        <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-[#1F1F1F]">
       <SideBarItem/>
        </div>
        <div className="flex-1">
          <NavbarAbout />
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
