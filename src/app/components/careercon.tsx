import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const careers = [
  {
    name: "Game Dev / Software Dev / DevOps Eng",
    salary: " N/A",
    type: "Remote",
    location: "SJDM Bulacan",
    region: "Ph",
    logo: "/sg-logo.svg",
    photo: "/images/career/4.jpg",
    description:
      "Develop and maintain software, games, and infrastructure to optimize performance and user experiences.",
  },
  {
    name: "3D,2D Artist / Graphic Artist / Animator",
    salary: " N/A",
    type: "Remote",
    location: "SJDM Bulacan",
    region: "Ph",
    logo: "/sg-logo.svg",
    photo: "/images/career/5.jpg",
    description:
      "Create visual assets and animations for various media, enhancing visual storytelling.",
  },
  {
    name: "AI Programmer / AI Engineer",
    salary: " N/A",
    type: "Remote",
    location: "SJDM Bulacan",
    region: "Ph",
    logo: "/sg-logo.svg",
    photo: "/images/career/2.jpg",
    description:
      "Experts in developing AI systems, creating algorithms and machine learning models for tasks like language processing and computer vision.",
  },
  {
    name: "Advanced security",
    salary: " N/A",
    type: "Remote",
    location: "SJDM Bulacan",
    region: "Ph",
    logo: "/sg-logo.svg",
    photo: "/images/career/1.png",
    description:
      "Sophisticated measures to safeguard systems, networks, and data from evolving cyber threats.",
  },
  {
    name: "Music Producer",
    salary: " N/A",
    type: "Remote",
    location: "SJDM Bulacan",
    region: "Ph",
    logo: "/sg-logo.svg",
    photo: "/images/teams/_WeynbrennerMado.jpg",
    description:
      "Creates and oversees the production of music tracks, working with artists and engineers to shape sound and recording",
  },
  {
    name: "Web Content Dev",
    salary: " N/A",
    type: "Remote",
    location: "SJDM Bulacan",
    region: "Ph",
    logo: "/sg-logo.svg",
    photo: "/images/career/7.jpg",
    description:
      "Creates and manages online content, including text, images, and multimedia, to engage and inform website visitors.",
  },
];

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    ...;
  }
  // use your custom style for ".popup-content"
  &-content {
    ...;
  }
`;

function CareerCom() {
  return (
    <div className="px-4 mx-auto max-w-screen-xl text-center py-15 lg:py-15 ">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7">Join Our Team</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
          Everything you need for a successful career
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Discover exciting career opportunities with us.
        </p>
      </div>
      <div className="mx-auto mt-16">
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {careers.map((career, index) => (
            <div key={index} className="relative">
              <dt className="text-base font-semibold leading-7 text-white">
                {career.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {"Salary ₱ " + career.salary} | {"Type: " + career.type} |{" "}
                {career.location + ", " + career.region}
              </dd>
              <StyledPopup
                trigger={
                  <button className="button border rounded-lg shadow-lg mt-2 py-2 px-2 border-gray-200 text-gray-700 hover:text-indigo-200 hover:border-indigo-400">
                    Check out
                  </button>
                }
                modal
                closeOnDocumentClick
              >
                <figure className="transition-all duration-300 cursor-pointer filter grayscale  hover:grayscale-0">
                  <div className="text-center bg-center bg-cover bg-[url('/images/wallpaper/career-wallpaper.svg')]  rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <div className="w-1/3 ">
                        <img
                          src={career.photo} // Replace with the correct image URL
                          alt={career.name}
                          className="h-48 w-full object-cover "
                        />
                      </div>
                      <div className="w-2/3 ml-4">
                        <h2 className="text-3xl font-semibold text-indigo-200">
                          {career.name}
                        </h2>
                        <p className="mt-4 text-lg text-indigo-400">
                          {"Salary ₱ " + career.salary} |{" "}
                          {"Type: " + career.type} <br />
                          <p className="text-center mx-2 text-xs text-teal-500">
                            {career.description}
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </figure>
              </StyledPopup>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default CareerCom;
