"use client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Suspense, lazy } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Jumbotron = lazy(() => import("@/app/components/jumbotron"));

export default function Index() {
  return (
    <Suspense fallback={<ScaleLoader color="#36d7b7" height={100} width={4} />}>
      <div className=" bg-black text-white">
        <Navbar />
        <Jumbotron />
        <div className="mx-auto max-w-screen-xl px-10 pt-16 text-center">
          <div className="relative"></div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}
