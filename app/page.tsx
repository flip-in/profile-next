import React from "react";
import Image from "next/image";
import taglineImg from "public/assets/logos/transparent/smallsize_tagline_on_transparent_by_logaster.png";
import bg from "public/assets/sarah-dorweiler-QeVmJxZOv3k-unsplash.jpg";

type Props = {};

function Home({}: Props) {
  return (
    <div>
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

      <div>
        <section id="About" className="bg-gray-200 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p>This is the About section.</p>
          </div>
        </section>
      </div>

      <div>
        <section id="Portfolio" className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
            <p>This is the Portfolio section.</p>
          </div>
        </section>
      </div>

      <div>
        <section id="Contact" className="bg-gray-200 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p>This is the Contact section.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
