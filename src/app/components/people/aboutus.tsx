import React from "react";

interface Props extends React.HTMLAttributes<any> {
  className?: string;
}

export default function About({ className, ...props }: Props) {
  // ... Your existing code ...

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Title on the left side (1/3 width on large screens) */}
      <div className="lg:w-1/3 p-4 ">
        <h2 className="text-2xl font-bold">About Us</h2>
      </div>

      {/* Description on the right side (2/3 width on large screens) */}
      <div className="lg:w-2/3 p-4 text-left">
        <p>
          We are a Filipino startup game development company, dedicated to
          crafting captivating experiences inspired by history. Our talented
          team of developers, designers, and storytellers collaborates to
          meticulously research and recreate historical settings, ensuring an
          authentic and engrossing gameplay experience. From exploring ancient
          civilizations to engaging in epic battles and unraveling mysteries
          from the past, SourceGoose games offer a captivating blend of
          education and entertainment.
        </p>
      </div>
    </div>
  );
}
