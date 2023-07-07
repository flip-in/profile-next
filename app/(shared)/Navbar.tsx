"use client";
import styles from "styles/navbar.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import navLogo from "public/assets/logos/favicons/navLogo.png";

type Props = {};

const Navbar = (props: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `${styles.navbar} ${scrolled ? styles.scrolled : ""}`;

  return (
    <header>
      <nav className={navbarClass}>
        <div className="flex items-center gap-7 lg:text-lg md:text-md max-sm:text-sm flex-grow justify-evenly mx-5 p-2">
          <a href="#About">About</a>
          <a href="#Portfolio">Portfolio</a>
          <div className={styles.navbarLogo}>
            <Image alt="William Price logo" placeholder="blur" src={navLogo} />
          </div>
          <a href="#Contact">Contact</a>
          <a href="#Home">Home</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
