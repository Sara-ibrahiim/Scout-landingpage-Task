import ProfileInput from "./componentsAbout/ProfileInput";
import ProfileOutput from "./componentsAbout/ProfileOutput";
import { Sidebar } from "./componentsAbout/SideBar";


const About = () => {
  return (
    <section className="my-4">
      <div className="flex">
        <Sidebar/>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <ProfileInput />
          </div>

          <div className="col-span-12 md:col-span-6">
            <ProfileOutput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
