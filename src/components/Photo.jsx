"use client";

import React, { useState, useEffect } from "react";
import Masonry from "../components/Masonry";
import InteractiveViewer from "../components/InteractiveViewer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {
  const items = [
  // New images become 1 & 2
  { id: "1", img: "/im25.jpeg", height: 700 },
  { id: "2", img: "/im26.jpeg", height: 720 },

  // Shift your old items (start from 3)
  { id: "3", img: "/im1.jpg", height: 680 },
  { id: "4", img: "/im3.jpg", height: 720 },
  { id: "5", img: "/im4.jpg", height: 690 },
  { id: "6", img: "/im5.jpg", height: 710 },

  { id: "7", img: "/im7.jpg", height: 680 },
  { id: "8", img: "/im8.jpg", height: 720 },
  { id: "9", img: "/im9.jpg", height: 700 },
  { id: "10", img: "/im10.jpg", height: 740 },
  { id: "11", img: "/im11.jpg", height: 720 },
  { id: "12", img: "/im12.jpg", height: 690 },
  { id: "13", img: "/im13.jpg", height: 680 },
  { id: "14", img: "/im14.jpg", height: 710 },
  { id: "15", img: "/im15.jpg", height: 740 },
  { id: "16", img: "/im16.jpg", height: 720 },
  { id: "17", img: "/im17.jpg", height: 690 },
  { id: "18", img: "/im18.jpg", height: 680 },
  { id: "19", img: "/im19.jpg", height: 720 },
  { id: "20", img: "/im20.jpg", height: 700 },
  
];


  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <section className="w-full py-20 bg-black text-white" id="gallery">
        <div className="max-w-6xl mx-auto text-center mb-12 px-4">
          <h2 className="text-5xl font-bold" data-aos="fade-up">
            Gym Gallery
          </h2>

          <p
            className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore our workshop — craftsmanship, precision, and passion in every detail.
          </p>
        </div>

        <div
          className="max-w-[1600px] mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Masonry items={items} onImageClick={setActiveIndex} />
        </div>
      </section>

      <InteractiveViewer
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNext={() => setActiveIndex((i) => (i + 1) % items.length)}
        onPrev={() =>
          setActiveIndex((i) => (i === 0 ? items.length - 1 : i - 1))
        }
      />
    </>
  );
}
