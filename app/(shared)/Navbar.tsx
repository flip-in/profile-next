import styles from "styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import navLogo from "public/assets/logos/favicons/navLogo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header>
      <nav className="flex py-5 items-center justify-evenly">
        <div className="flex items-center gap-7 lg:text-lg md:text-md max-sm:text-sm ">
          <Link href="/">About</Link>
          <Link href="/">Portfolio</Link>
          <div className={styles.navbarLogo}>
            <Image alt="William Price logo" placeholder="blur" src={navLogo} />
          </div>
          <Link href="/">Contact</Link>
          <Link href="/">Home</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
