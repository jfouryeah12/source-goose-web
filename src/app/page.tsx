"use client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Jumbotron from "@/app/components/jumbotron";
import Link from "next/dist/client/link";

export default function Index() {
  return (
    <div className=" bg-black text-white">
      <Navbar />
      <Jumbotron />
      <div className="mx-auto max-w-screen-xl px-10 pt-16 text-center">
        <div className="relative"></div>
      </div>
      <Footer />
    </div>
  );
}
