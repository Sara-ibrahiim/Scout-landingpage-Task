import ProfileInput from "./componentsAbout/ProfileInput";
import ProfileOutput from "./componentsAbout/ProfileOutput";

const About = () => {
  return (
    <section className="my-4">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <ProfileInput />
        </div>

        <div className="col-span-12 md:col-span-6">
          <ProfileOutput />
        </div>
      </div>
    </section>
  );
};

export default About;
