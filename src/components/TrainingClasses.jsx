"use client";
import React from "react";

export default function ClassesGrid() {
  return (
    <section className="w-full py-20 bg-black" id="training">
      <div className="grid grid-cols-1 md:grid-cols-4">

        {/* Image 1 */}
        <img
          src="image5.jpeg"
          className="w-full h-[380px] object-cover"
          alt="boxing"
        />

        {/* BOX 1 */}
        <div className="bg-red-600 text-white p-10 flex flex-col justify-center h-[380px]">
          <h2 className="text-3xl font-extrabold uppercase mb-4">
            Boxing Classes <br /> for All Levels
          </h2>

          <p className="text-sm leading-relaxed opacity-90 mb-6">
            High-energy sessions focused on technique, footwork, combinations,
            and conditioning.
          </p>

         
        </div>

        {/* Image 2 */}
        <img
          src="image4.jpeg"
          className="w-full h-[380px] object-cover"
          alt="boxing training"
        />

        {/* BOX 4 */}
        <div className="bg-red-600 text-white p-10 flex flex-col justify-center h-[380px]">
          <h2 className="text-3xl font-extrabold uppercase mb-4">
            Boxing for Fitness
          </h2>

          <p className="text-sm leading-relaxed opacity-90 mb-6">
            A non-contact class designed to burn calories, strengthen the body,
            and improve cardio.
          </p>

          
        </div>

        {/* BOX 2 */}
        <div className="bg-red-600 text-white p-10 flex flex-col justify-center h-[380px]">
          <h2 className="text-3xl font-extrabold uppercase mb-4">
            Personal Training
          </h2>

          <p className="text-sm leading-relaxed opacity-90 mb-6">
            1-to-1 coaching tailored to your goals — weight loss, boxing skills,
            strength, or competition prep.
          </p>

          
        </div>

        {/* Image 4 */}
        <img
          src="image3.jpeg"
          className="w-full h-[380px] object-cover"
          alt="boxing gym"
        />

        {/* BOX 3 */}
        <div className="bg-red-600 text-white p-10 flex flex-col justify-center h-[380px]">
          <h2 className="text-3xl font-extrabold uppercase mb-4">
            Amateur & Competitive <br /> Boxing Coaching
          </h2>

          <p className="text-sm leading-relaxed opacity-90 mb-6">
            Structured fighter development for those wanting to compete.
          </p>

         
        </div>

        {/* Image 3 */}
        <img
          src="image2.jpeg"
          className="w-full h-[380px] object-cover"
          alt="boxing punch"
        />

      </div>
    </section>
  );
}
