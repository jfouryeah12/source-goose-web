"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Suspense, lazy } from "react";
import { ScaleLoader } from "react-spinners";

const CareerCom = lazy(() => import("../../components/careercon"));
export default function Career() {
  return (
    <Suspense fallback={<ScaleLoader color="#36d7b7" height={100} width={4} />}>
      <div className=" bg-black text-white">
        <Navbar />
        <section
          className="bg-center bg-cover bg-[url('/images/wallpaper/career-wallpaper.svg')] bg-gray-700 bg-blend-multiply py-20"
          style={{
            height: "100%", // Adjust the height as per your requirement
          }}
        >
          <CareerCom />
        </section>
        <Footer />
      </div>
    </Suspense>
  );
}
