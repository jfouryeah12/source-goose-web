"use client";
import React, { Suspense, lazy, useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { RingLoader } from "react-spinners";

const Jumbotron = lazy(() => import("@/app/components/jumbotron"));

export default function Index() {
  const [isReady, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate some asynchronous data loading or other setup
    setTimeout(() => {
      setIsLoading(true);
    }, 2000); // Change the delay as needed
  }, []);

  return (
    <Suspense
      fallback={
        <div
          className="flex justify-center items-center h-screen"
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
        >
          <RingLoader color="white" size={100} />
        </div>
      }
    >
      <div className="bg-black text-white">
        {isReady ? (
          <div>
            <Navbar />
            <Jumbotron />
            <div className="mx-auto max-w-screen-xl px-10 pt-16 text-center">
              <div className="relative"></div>
            </div>
            <Footer />
          </div>
        ) : null}
      </div>
    </Suspense>
  );
}
