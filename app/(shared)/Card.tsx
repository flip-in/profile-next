import React from "react";

type Props = {
  jobTitle?: string;
  description?: string;
  link?: string;
};

const Card = ({ jobTitle, description, link }: Props) => {
  return (
    <>
      <div className="bg-white p-4 sm:mt-0 mt-5">
        <div>
          <span className="text-sm text-wh-300">{jobTitle}</span>
        </div>
        <div>
          <p className="mt-1">{description}</p>
        </div>
        {/* TODO: Add some styling to the link */}
        <div className="mt-5 text-sm">
          {link && (
            <a className="underline text-gray-600 " target="_blank" href={link}>
              Work Experience
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
