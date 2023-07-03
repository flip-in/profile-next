import React from "react";
import Image from "next/image";
import taglineImg from "public/assets/logos/transparent/smallsize_tagline_on_transparent_by_logaster.png";
import bg from "public/assets/sarah-dorweiler-QeVmJxZOv3k-unsplash.jpg";

type Props = {};

function Home({}: Props) {
  return (
    <div
      className="flex items-start justify-center bg-center bg-no-repeat h-[500px]"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "500px",
      }}
    >
      <Image src={taglineImg} height={200} alt="name logo" />
    </div>
  );
}

export default Home;
