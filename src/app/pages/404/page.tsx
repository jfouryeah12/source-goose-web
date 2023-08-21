"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";

export default function _404() {
  return (
    <div className=" bg-black text-white">
      <Navbar />
      <section
        className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply"
        style={{
          background: "black",
          height: "100vh", // Adjust the height as per your requirement
        }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-24 ">
          {/* Your content goes here */}
          <span className="flex item-center justify-center">
            <img
              src="/images/emote/cute-ant.png"
              width={"150px"}
              className="ml-2"
              alt="Cute ant"
            />
          </span>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
            404! This is not available yet.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Apologies, but the requested content is currently unavailable.
            Please check back later.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
