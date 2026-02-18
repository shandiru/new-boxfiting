"use client";
import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      author: "Hasan Khan",
      role: "User",
      text: "Exceptional boxing gym with a top-notch coach (Sam)! The atmosphere is motivating, and the coach's expertise shines through personalised training. The sessions are intense yet tailored to individual needs—great for both beginners and seasoned boxers. Highly recommend!",
    },
    {
      author: "Tunny",
      role: "User",
      text: "Great boxing gym, Sam is a 10/10 coach. Everyone is really supportive and motivating. Definitely recommend the women’s classes — they’re always a good vibe!",
    },
    {
      author: "Feyi Ashamu",
      role: "User",
      text: "Great gym for learning technique and improving fitness. Women’s classes are super welcoming. Definitely recommend!",
    },
    {
      author: "Nora Okeke",
      role: "User",
      text: "Women’s classes at Boxfit Coaching are perfect for exercise and improving technique. Renovated gym has everything you need!",
    },
    {
      author: "Maya Kenarzie",
      role: "User",
      text: "Amazing experience! I've been coming for months — the coach pushes us to succeed and always brings out our best.",
    },
    {
      author: "Jamie",
      role: "User",
      text: "Phenomenal gym. I've been training here since before it opened. Sam always helps you on your boxing journey, whether fitness or competing 💪",
    }
  ];

  return (
    <section className="w-full bg-black text-white py-10" id="testimonials">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT STICKY IMAGE */}
        <div
          className="relative h-[600px] lg:h-[800px] sticky top-24 flex items-center"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <img
            src="/image1.jpeg"
            alt="Boxer"
            className="w-full h-50h object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl"></div>
        </div>

        {/* RIGHT SCROLLING REVIEWS */}
        <div className="space-y-32 mt-12 pl-6 lg:pl-16">

          {/* TITLE */}
          <div
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
              <span className="text-red-600">Real Reviews</span><br />
              From Our Members
            </h2>
          </div>

          {/* REVIEW LIST */}
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-h-[260px] flex flex-col justify-center scroll-mt-20"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 150}
            >
              <div className="text-7xl text-red-600 mb-6">“</div>

              <p className="text-xl md:text-2xl font-semibold leading-relaxed max-w-2xl">
                {item.text}
              </p>

              <div className="mt-6">
                <p className="text-gray-400 text-sm">{item.role}</p>
                <p className="text-white text-lg font-bold">{item.author}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
