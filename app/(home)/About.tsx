import React from "react";
import Card from "../(shared)/Card";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section id="About" className="py-8">
      {/* INTRO */}
      <div className="sm:flex ">
        <div className="basis-1/2">
          <h1 className="text-4xl py-4">Hi, I&apos;m William Price</h1>
          <p className="text-lg">
            Software Developer and Manager, <br></br> Engineering and Product
            Development
          </p>
          <p>
            I build processes for the engineering team to grow and deliver
            high-quality products. I have over three years of experience in a
            technical leadership role, and I have a Full-Stack Web Developer
            certification from Le Wagon and two Javascript certifications from
            ui.dev.
          </p>
        </div>
        <div className="sm:flex basis-1/2 flex-col gap-2">
          <div className="">
            <p>Highlights</p>
          </div>
          <div className=" mb-2">
            <Card />
          </div>
          <div className=" mb-2">
            <Card />
          </div>
        </div>
      </div>

      {/* TECHNOLOGIES */}
    </section>
  );
};

export default About;
