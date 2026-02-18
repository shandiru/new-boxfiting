"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="absolute inset-0">
        <video
          src="/BFC finished video 2.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-20 max-w-5xl mx-auto h-full flex flex-col items-center justify-center text-center px-6">
        {/* MAIN TITLE */}
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-red-600 uppercase leading-tight"
        >
          Train Like a Champion at Birmingham’s Premier Boxing Gym
        </h1>

        {/* SUB TITLE */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
        >
          Professional & Amateur Boxing • Personal Training • Fitness Classes for All Levels
        </p>

        {/* ACTION BUTTONS */}
        <div
          data-aos="fade-up"
          data-aos-delay="350"
          className="mt-10 flex flex-wrap gap-6 justify-center"
        >
          {/* Become a Member */}
          <a
            href="https://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=GREF2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-8 py-3 font-bold text-sm tracking-wide uppercase hover:bg-red-700 transition-all duration-300"
          >
            Become a Member
          </a>

          {/* Wellbeing Programme */}
          <a
            href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAZ8HcwNUNUg1Sjk4RThNRk9JNFVWNjUwNzFURzBVQS4u&origin=QRCode&qrcodeorigin=presentation&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-3 font-bold text-sm tracking-wide uppercase hover:bg-gray-200 transition-all duration-300"
          >
            Wellbeing Programme
          </a>
        </div>
      </div>
    </section>
  );
}
