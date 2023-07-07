import React from "react";
import Image from "next/image";
import taglineImg from "public/assets/logos/transparent/smallsize_tagline_on_transparent_by_logaster.png";
import bg from "public/assets/sarah-dorweiler-QeVmJxZOv3k-unsplash.jpg";
import About from "./(home)/About";
import Contact from "./(home)/Contact";
import Portfolio from "./(home)/Portfolio";

type Props = {};

function Home({}: Props) {
  return (
    <div className="md:flex justify-center">
      <div className="xl:w-1/2 lg:w-2/3 md:w-3/4">
        <div
          id="hero-background"
          className="flex items-start justify-center bg-center bg-no-repeat h-[500px]"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "500px",
          }}
        >
          <Image id="hero-logo" src={taglineImg} height={200} alt="name logo" />
        </div>
        <div className="mt-5">
          <About />
          <Contact />
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default Home;
