"use client";
import Navbar from "../../components/navbar";
import About from "../../components/people/aboutus";
import Footer from "../../components/footer";
import WallpaperGroup from "../../components/people/wallpaper";
import { Suspense, lazy } from "react";
import { ScaleLoader } from "react-spinners";

const Teams = lazy(() => import("../../components/people/teams"));

export default function People() {
  return (
    <Suspense fallback={<ScaleLoader color="#36d7b7" height={100} width={4} />}>
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
    </Suspense>
  );
}
