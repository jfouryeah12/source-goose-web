"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CareerCom from "../../components/careercon";
export default function Career() {
  return (
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
  );
}
