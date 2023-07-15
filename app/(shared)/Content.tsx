"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";

type Props = {
  title?: string;
  subtitle?: string;
  images?: {
    desktop: {
      path: string;
      alt: string;
      width: number;
      height: number;
      priority?: boolean;
    };
    mobile: {
      path: string;
      alt: string;
      width: number;
      height: number;
      priority?: boolean;
    };
  }[];

  features?: { title: string; description: string }[];
  titleLink?: string;
  imageLeft?: boolean;
};

const Content = ({
  title = "Title goes here",
  subtitle = "Subtitle goes here",
  images = [],
  features = [
    {
      title: "Feature title",
      description: "Feature description",
    },
  ],
  titleLink = "",
  imageLeft = false,
}: Props = {}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openModal = () => {
    document.body.classList.add("noScroll");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove("noScroll");
    setIsModalOpen(false);
  };

  useEffect(() => {
    const setMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    setMobile(); // Setting initial state of isMobile on first render
    window.addEventListener("resize", setMobile);
    return () => {
      window.removeEventListener("resize", setMobile);
      document.body.classList.remove("noScroll");
    };
  }, []);

  let mainImage;
  if (images.length > 0) {
    if (isMobile && images[0].mobile) {
      mainImage = images[0].mobile;
    } else if (images[0].desktop) {
      mainImage = images[0].desktop;
    }
  }
  return (
    <div className="mb-16 sm:mb-0">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div
          className={`lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center ${
            imageLeft ? "" : "flex-row-reverse"
          }`}
        >
          <div className="md:5/12 lg:w-1/2">
            <div
              className="relative cursor-pointer hover:opacity-70"
              onClick={openModal}
            >
              {mainImage?.path && (
                <Image
                  alt={mainImage.alt}
                  src={mainImage.path}
                  width={mainImage.width}
                  height={mainImage.height}
                  priority={mainImage.priority}
                ></Image>
              )}
              <div className="absolute inset-0 flex items-center justify-center rounded-sm  transition-opacity duration-200 shadow-md group">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100">
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black" />
                </div>
              </div>
            </div>
            <p className="text-center mt-2 text-sm text-gray-500">
              Click to enlarge
            </p>
          </div>
          <Modal isOpen={isModalOpen} closeModal={closeModal} images={images} />

          <div className="md:7/12 lg:w-1/2">
            {titleLink ? (
              <a href={titleLink} target="_blank" rel="noopener noreferrer">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  {title}
                </h2>
              </a>
            ) : (
              <h2 className="text-3xl font-bold text-gray-900 md:text-4x">
                {title}
              </h2>
            )}
            <p className="my-8 text-gray-600 ">{subtitle}</p>
            <div className="divide-y space-y-4 divide-gray-100 ">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="mt-8 flex gap-4 md:items-center"
                >
                  <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-indigo-500 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 ">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 ">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Content };
