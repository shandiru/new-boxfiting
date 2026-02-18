"use client";
import React, { useState } from "react";
import ReferralModal from "./ReferralModal";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ SEND CONTACT FORM TO WHATSAPP
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "447737163987";

    const text =
      `📩 *New Contact Enquiry – Box Fit Coaching*%0A%0A` +
      `👤 *Name:* ${form.name}%0A` +
      `📧 *Email:* ${form.email}%0A` +
      `📞 *Phone:* ${form.phone}%0A%0A` +
      `💬 *Message:*%0A${form.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      "_blank"
    );

    // reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      className="w-full bg-[#0c0c0c] py-20 text-white overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
            <span className="text-red-600">Contact</span> Box Fit Coaching
          </h2>

          <div className="mt-8 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Box Fit Coaching — Birmingham
              </span>
              <br />
              69 Rea Street, Birmingham, B5 6BB, United Kingdom
            </p>

            <p>
              <span className="text-white font-semibold">Phone:</span>{" "}
              <a
                href="tel:+447737163987"
                className="hover:text-red-600 transition"
              >
                 +44 7737 163987
              </a>
            </p>

            {/* HOURS */}
            <div className="mt-6">
              <p className="text-white font-semibold text-lg">Hours:</p>
              <p>Mon–Fri: 6:00 AM – 10:00 PM</p>
              <p>Sat–Sun: 6:00 AM – 2:00 PM</p>
              <p className="text-gray-400 text-sm mt-1">(Walk-ins welcome)</p>
            </div>

            {/* OPEN MODAL */}
           <a
  href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAZ8HcwNUNUg1Sjk4RThNRk9JNFVWNjUwNzFURzBVQS4u&origin=QRCode&qrcodeorigin=presentation&route=shorturl"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block bg-red-600 text-white font-bold px-6 py-3 rounded hover:bg-red-700 transition"
>
  Wellbeing Programme
</a>

          </div>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleInput}
              required
              className="w-full bg-black text-white px-4 py-4 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleInput}
              required
              className="w-full bg-black text-white px-4 py-4 outline-none"
            />
          </div>

          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleInput}
            required
            className="w-full bg-black text-white px-4 py-4 outline-none"
          />

          <textarea
            name="message"
            placeholder="Write your message"
            value={form.message}
            onChange={handleInput}
            required
            className="w-full h-60 bg-black text-white px-4 py-4 outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-white text-black font-bold tracking-wider px-10 py-4 hover:bg-red-600 hover:text-white transition"
          >
            SEND MESSAGE (WhatsApp)
          </button>

          <p className="text-xs text-center text-white mt-2">
            By submitting this form, you agree to us processing your details to
            respond to your enquiry. Your information is handled securely and in
            line with our Privacy Policy.
          </p>
        </form>
      </div>

      {/* REFERRAL MODAL */}
      <ReferralModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
