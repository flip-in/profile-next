"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type Props = {
  title?: string;
  subtitle?: string;
  imageSrc?: StaticImageData;
  features?: { title: string; description: string }[];
};

const RightContent = ({
  title = "Title goes here",
  subtitle = "Subtitle goes here",
  imageSrc,
  features = [
    {
      title: "Feature title",
      description: "Feature description",
    },
  ],
}: Props = {}) => {
  return (
    <div className="py-16">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div className="lg:bg-gray-50 dark:lg:bg-black lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            {imageSrc && (
              <Image
                alt="image"
                src={imageSrc.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            )}
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              {title}
            </h2>
            <p className="my-8 text-gray-600 dark:text-gray-300">{subtitle}</p>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="mt-8 flex gap-4 md:items-center"
                >
                  <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
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

const LeftContent = (props: Props) => {
  return <div>Content</div>;
};

export { RightContent, LeftContent };
