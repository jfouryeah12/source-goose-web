import React from "react";
import { Aboutus } from "@/app/components/Lib/string";

interface Props extends React.HTMLAttributes<any> {
  className?: string;
}

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Title on the left side (1/3 width on large screens) */}
      <div className="lg:w-1/3 p-4 ">
        <h2 className="text-2xl font-bold">About Us</h2>
      </div>

      {/* Description on the right sidAVe (2/3 width on large screens) */}
      <div className="lg:w-2/3 p-4 text-left">
        <p>{Aboutus.aboutus}</p>
      </div>
    </div>
  );
}
