import styles from "styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import navLogo from "public/assets/logos/favicons/navLogo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header>
      <nav className="flex py-5 items-center justify-center ">
        <div className="flex items-center gap-7 lg:text-lg md:text-md max-sm:text-sm flex-grow justify-evenly mx-5">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <div className={styles.navbarLogo}>
            <Image alt="William Price logo" placeholder="blur" src={navLogo} />
          </div>
          <a href="#contact">Contact</a>
          <a href="#home">Home</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
