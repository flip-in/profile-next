import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="my-5">
      <section id="About" className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p>This is the About section.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
