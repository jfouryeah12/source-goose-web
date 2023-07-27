"use client";
import Navbar from "../../components/navbar";
import About from "../../components/people/aboutus";
import Teams from "../../components/people/teams";
import Footer from "../../components/footer";
import WallpaperGroup from "../../components/people/wallpaper";

export default function People() {
  return (
    <div className=" bg-black text-white">
      <Navbar />
      <WallpaperGroup />
      <div className="mx-auto max-w-screen-xl px-10 pt-16 text-center">
        <div className="relative"></div>
        <About />
      </div>
      <div className="mx-auto max-w-screen-xl px-10 pt-10 text-center">
        <hr className="w-48 h-1 mx-auto my-0 bg-gray-700 border-0 rounded md:my-0" />
      </div>

      <div className="mx-auto max-w-screen-xl px-10 pt-10 pb-10 text-center">
        <div className="relative"></div>

        <Teams />
      </div>
      <Footer />
    </div>
  );
}
