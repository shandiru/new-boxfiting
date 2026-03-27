"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timetable = {
  Monday: [
    { name: "Junior Boxers", time: "5:00pm" },
    { name: "Womens Boxing", time: "6:00pm" },
    { name: "SQUAD", time: "7:00PM" },
  ],
  Tuesday: [
    { name: "Beginners", time: "10:30AM" },
    { name: "BFC Wellbeing Programme", time: "6:00PM" },
    { name: "Beginners", time: "7:30PM" },
  ],
  Wednesday: [
    { name: "Junior Boxers", time: "5:00PM" },
    { name: "Beginners", time: "6:00PM" },
    { name: "SQUAD", time: "7:00PM" },
  ],
  Thursday: [
     { name: "Beginners", time: "10:30AM" },
    { name: "Womens", time: "6:00PM" },
    { name: "Beginners", time: "7:30PM" },
  ],
  Friday: [
    { name: "Junior Boxers", time: "5:00PM" },
    { name: "Beginners", time: "6:00PM" },
    { name: "SQUAD", time: "7:00PM" },
    
  ],
  Saturday: [{ name: "Beginners", time: "11:00AM" },
    { name: "BFC Wellbeing Programme", time: "12:00PM" },
    { name: "BFC Wellbeing Programme", time: "1:00PM" }
  ],
  Sunday: [],
};

export default function ClassTimetable() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleActive = (key) => {
    if (!isMobile) return; // only for mobile
    setActiveCard((prev) => (prev === key ? null : key));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 0px 20px rgba(255,0,0,0.3)" },
    tap: { scale: 1.05, boxShadow: "0px 0px 20px rgba(255,0,0,0.3)" },
  };

  return (
    <section id="timetable" className="bg-black py-20 px-6 overflow-x-auto">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center mb-12 uppercase tracking-wide">
          Weekly Class Timetable
        </h2>

        <div className="min-w-[1100px] grid grid-cols-7 gap-6">
          {Object.entries(timetable).map(([day, sessions]) => (
            <div
              key={day}
              className="bg-[#101010] rounded-2xl shadow-[0_0_20px_-5px_rgba(255,0,0,0.3)] flex flex-col overflow-hidden"
            >
              <div className="bg-red-600 py-4 text-center">
                <h3 className="text-white font-bold text-xl uppercase tracking-wide">
                  {day}
                </h3>
              </div>

              <div className="p-5 flex-1 flex flex-col gap-4">
                <AnimatePresence>
                  {sessions.map((s, idx) => {
                    const key = `${day}-${idx}`;
                    const isActive = activeCard === key;

                    return (
                      <motion.div
                        key={key}
                        onClick={() => toggleActive(key)}
                        initial="hidden"
                        animate="visible"
                        whileHover={!isMobile ? "hover" : ""}
                        whileTap={isMobile ? "tap" : ""}
                        variants={cardVariants}
                        className={`
                          bg-[#151515] p-4 rounded-xl shadow-md
                          cursor-pointer
                        `}
                      >
                        <p className="text-white font-semibold text-sm leading-tight">
                          {s.name}
                        </p>
                        <p className="text-red-500 text-sm font-bold mt-2">
                          {s.time}
                        </p>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {Array.from({ length: 4 - sessions.length }).map((_, i) => (
                  <div key={i} className="h-20"></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-10 text-lg tracking-wide">
          All sessions are 1 hour. <br />
        
        </p>
      </div>
    </section>
  );
}
