import React from "react";
import { RightContent } from "../(shared)/Content";
import speedoc1 from "/public/assets/speedoc-desktop.png";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className="my-5">
      <section id="Portfolio" className="bg-gray-200 py-8">
        <RightContent
          title="Speedoc.com"
          subtitle="Speedoc corporate website"
          imageSrc={speedoc1}
          features={[
            {
              title: "On-demand Healthcare",
              description:
                "Providing healthcare services at the comfort of your home, at any time.",
            },
            {
              title: "24/7 Availability",
              description:
                "Our platform is available round the clock to address your health concerns.",
            },
            {
              title: "Trusted and Reliable",
              description:
                "Our team of professionals are certified and vetted, ensuring the best quality healthcare.",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default Portfolio;
