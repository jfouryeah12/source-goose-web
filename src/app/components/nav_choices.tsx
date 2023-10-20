import React, { useState } from "react";
import Button from "@/app/components/Button";
import { DirectLink } from "./Lib/string";
import { AiOutlineDollar, AiFillHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

interface Props extends React.HTMLAttributes<any> {
  className?: string;
}

export default function Navbar_Choices({ className, ...props }: Props) {
  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black rounded-lg bg-black md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <a href="/">
        <Button type="button" color="github">
          <AiFillHome size={15} className="mr-2" />
          Home
        </Button>
      </a>
      <a href="/pages/people">
        <Button type="button" color="github">
          <BsPeopleFill size={15} className="mr-2" />
          People
        </Button>
      </a>
    </ul>
  );
}
