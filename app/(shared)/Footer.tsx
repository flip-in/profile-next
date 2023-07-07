import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-center items-center h-16 bg-bl-900 text-white">
      <p className="text-sm flex">
        Made with <HeartIcon className="h-5 w-5 mx-1 text-red-500" /> by William
        Price
      </p>
      <div className="ml-4 flex">
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
    </footer>
  );
};

export default Footer;
