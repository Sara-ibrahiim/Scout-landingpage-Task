import NavbarAbout from "./componentsAbout/NavbarAbout";
import ProfileInput from "./componentsAbout/ProfileInput";
import ProfileOutput from "./componentsAbout/ProfileOutput";
import SideBarItem from "./componentsAbout/SideBarItem";

const About = () => {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row border border-[#1F1F1F]">
        <div className="w-full lg:w-56 border-b lg:border-b-0 lg:border-r border-[#1F1F1F]">
          <SideBarItem />
        </div>
        <div className="flex-1">
          <NavbarAbout />
          <div className="grid grid-cols-12 gap-2 p-2">
            <div className="col-span-12 lg:col-span-6">
              <ProfileInput />
            </div>
            <div className="col-span-12 lg:col-span-6 overflow-hidden ">
              <ProfileOutput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
