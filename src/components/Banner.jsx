// src/components/Banner.jsx
import { useEffect, useState } from "react";

const Banner = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.35); // parallax speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-80 overflow-hidden">
      {/* Parallax background (taller + scaled) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Christmas_banner.webp')",
          height: "130%",        // ✔ keep image tall enough
          transform: `translateY(${offset}px) scale(1.2)`, // ✔ zoom + parallax
          transformOrigin: "center",
        }}
      />

      {/* Foreground content */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-700 font-semibold tracking-wider shadow-sm bg-white p-5 border border-gray-200 bg-opacity-70 rounded-xl">
          Boldog Karácsonyt!
        </h1>
      </div>
    </div>
  );
};

export default Banner;
