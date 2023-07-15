import React from "react";
import { Content } from "../(shared)/Content";
import speedoc1 from "/public/assets/speedoc-desktop.png";
import blog1 from "public/assets/blog-desktop.png";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className="my-5">
      <section id="Portfolio" className=" py-8">
        <Content
          title="Speedoc Corporate Website"
          titleLink="https://www.speedoc.com"
          subtitle="Speedoc corporate website"
          imageSrc={speedoc1}
          imageLeft={false}
          features={[
            {
              title: "Full Headless CMS",
              description:
                "Payload CMS serving all content, images, and site-wide variables",
            },
            {
              title: "24/7 Availability",
              description:
                "Our platform is available round the clock to address your health concerns.",
            },
          ]}
        />
        <Content
          title="AI Blog App"
          titleLink="https://blog-ai-app-ten.vercel.app/"
          subtitle="Personal Next.js sandbox project to experiment with OpenAI and Tip Tap editor"
          imageSrc={blog1}
          imageLeft={true}
          features={[
            {
              title: "Prisma and MySQL",
              description:
                "MySQL database hosted on Planetscale and interfaced with Prisma",
            },
            {
              title: "OpenAI API",
              description:
                "Uses OpenAI API to generate blog content based on the title and tone set by the user.",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default Portfolio;
