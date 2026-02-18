"use client";
import React from "react";

export default function LocationSection() {
  return (
    <section className="w-full h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97266.31697431585!2d-1.9716235!3d52.4730741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bde397db38d3%3A0x72b0eca496db0a36!2s69%20Rea%20St%2C%20Deritend%2C%20Birmingham%20B5%206BB%2C%20United%20Kingdom!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full grayscale-[50%] brightness-75 contrast-125"
      ></iframe>

    </section>
  );
}
