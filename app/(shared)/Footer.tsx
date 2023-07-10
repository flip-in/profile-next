"use client";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-center items-center bg-bl-900 text-white h-16">
      <div className="md:basis-1/4 basis-2/5 pl-5 flex items-center">
        <p className="md:text-sm text-xs text-gray-300">
          Made with
          <HeartIcon className="md:h-5 md:w-5 h-4 w-4 mx-1 text-red-500 inline-flex" />
          <span className="md:hidden">
            <br />
          </span>
          by William Price
        </p>
      </div>

      <div className="ml-4 flex md:basis-1/2 basis-1/5 justify-center">
        <a
          href="https://github.com/flip-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-5 w-5 mx-2 text-gray-400 hover:text-gray-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/price-william-alexander/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-5 w-5 mx-2 text-gray-400 hover:text-gray-300" />
        </a>
      </div>
      <div className="md:basis-1/4 basis-2/5 text-end text-gray-300 pr-5 md:text-sm text-xs">
        <a
          href={"https://github.com/flip-in/profile-next"}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 hover:text-gray-300"
        >
          View Source
        </a>
      </div>
    </footer>
  );
};

export default Footer;
