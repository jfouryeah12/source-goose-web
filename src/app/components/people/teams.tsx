import React from "react";
import Image from "next/image";
import people from "../Lib/people";
import { Aboutus } from "../Lib/string";
import About from "./aboutus";

interface Props extends React.HTMLAttributes<any> {
  className?: string;
}

const TeamMember = ({
  name,
  jobTitle,
  imageUrl,
}: {
  name: string;
  jobTitle: string;
  imageUrl: string;
}) => {
  return (
    <div className="employee-tile relative group">
      <div className="employee-img filter grayscale">
        <Image
          src={imageUrl}
          alt={`${name} profile picture`}
          width={300}
          height={300}
          loading="lazy"
        />
      </div>

      <div
        className={`employee-info absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-4 text-white text-center opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100`}
      >
        <div className="employee-info-content">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="job-title">{jobTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default function Teams() {
  return (
    <div>
      <h2 className="text-2xl font-bold">THE SG TEAM</h2>
      <br />
      <blockquote className="text-s italic text-white text-center ">
        <p className="w-[440px] justify-center text-center mx-auto">
          {Aboutus.thesgteam}
        </p>
      </blockquote>
      <div className="flex flex-wrap justify-center my-10">
        {people.map((person) => (
          <div
            key={person.id}
            className="relative group transform hover:scale-150  hover:z-10 ease-in-out duration-300"
          >
            <TeamMember
              name={person.name}
              jobTitle={person.jobTitle}
              imageUrl={person.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
