"use client";
import React from "react";
import {
  CheckCircle,
  Users,
  Heart,
  Dumbbell,
  Sparkles,
  Shield,
  Star,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 overflow-hidden" id="whychoose">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center text-white mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Why Join <span className="text-red-600">Box Fit Coaching?</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
            Real boxing training, real results — for beginners, amateurs and competitive fighters.
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT — RESPONSIVE IMAGE */}
          <div className="relative">
            <img
              src="/hero.webp"
              alt="Box Fit Coaching"
              className="
                w-full 
                max-w-full 
                h-[350px] 
                sm:h-[420px] 
                md:h-[450px] 
                object-cover 
                rounded-lg 
                border border-red-600
              "
            />
          </div>

          {/* RIGHT — BENEFITS LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-white">

            <div className="flex items-start gap-3">
              <CheckCircle className="w-7 h-7 text-red-600" />
              <p className="text-gray-300 leading-relaxed">Professional & experienced coaches</p>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-7 h-7 text-red-600" />
              <p className="text-gray-300 leading-relaxed">Beginner-friendly classes</p>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="w-7 h-7 text-red-600" />
              <p className="text-gray-300 leading-relaxed">Real boxing training — no gimmicks</p>
            </div>

            <div className="flex items-start gap-3">
              <Dumbbell className="w-7 h-7 text-red-600" />
              <p className="text-gray-300 leading-relaxed">Personal training available</p>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-7 h-7 text-red-600" />
              <p className="text-gray-300 leading-relaxed">Supportive, community-focused environment</p>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="w-7 h-7 text-red-600" />
              <p className="text-gray-300 leading-relaxed">Improve fitness, strength & confidence</p>
            </div>

            <div className="flex items-start gap-3">
              <Star className="w-7 h-7 text-red-600" />
              <p className="text-gray-300 leading-relaxed">Suitable for men, women, and teens</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-7 h-7 text-red-600" />
              <p className="text-gray-300 leading-relaxed">Great membership options</p>
            </div>

          </div>
        </div>

        {/* CTA BUTTON */}
       <div className="text-center mt-14">
        <a
          href="https://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=GREF2"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-red-600 text-white px-10 py-4 text-lg font-bold
            tracking-wide rounded-md hover:bg-red-700 transition
          "
        >
          Join Now
        </a>
      </div>


      </div>
    </section>
  );
}
