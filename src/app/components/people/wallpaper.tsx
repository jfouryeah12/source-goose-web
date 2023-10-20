import React from "react";

interface Props extends React.HTMLAttributes<any> {
  className?: string;
}

export default function Gallery({ className, ...props }: Props) {
  // ... Your existing code ...

  return (
    <div>
      <section
        className="bg-center bg-no-repeat bg-cover bg-slate-900 bg-blend-multiply"
        style={{
          backgroundImage: `url('/images/group/sg-group-bw.svg')`, // Corrected URL
          height: "100vh", // Adjust the height as per your requirement
        }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          {/* Your content goes here */}
        </div>
      </section>
    </div>
  );
}
