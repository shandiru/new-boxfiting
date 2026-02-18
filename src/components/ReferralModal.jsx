"use client";
import React, { useState } from "react";

export default function ReferralModal({ open, onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    pronouns: "",
    dob: "",
    address: "",
    postcode: "",
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ SEND TO WHATSAPP
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "447960059329";

    const message =
      `📩 *BoxFitCoaching – Wellbeing Programme Referral*%0A%0A` +
      `👤 *Full Name:* ${form.fullName}%0A` +
      `📞 *Contact Number:* ${form.contactNumber}%0A` +
      `📧 *Email:* ${form.email}%0A` +
      `🧍 *Pronouns:* ${form.pronouns || "N/A"}%0A` +
      `🎂 *Date of Birth:* ${form.dob}%0A` +
      `🏠 *Address:* ${form.address}%0A` +
      `📮 *Postcode:* ${form.postcode}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );

    // optional reset
    setForm({
      fullName: "",
      contactNumber: "",
      email: "",
      pronouns: "",
      dob: "",
      address: "",
      postcode: "",
    });

    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
      <div className="bg-[#111] w-full max-w-2xl p-8 relative rounded-lg overflow-y-auto max-h-[90vh] shadow-lg">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-3xl hover:text-red-600"
        >
          &times;
        </button>

        <h3 className="text-3xl font-bold mb-6 text-center text-white">
          BoxFitCoaching Wellbeing Programme – Referral Form
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          {[
            { name: "fullName", label: "Full Name *", type: "text" },
            { name: "contactNumber", label: "Contact Number *", type: "tel" },
            { name: "email", label: "Email Address *", type: "email" },
            { name: "pronouns", label: "Preferred Pronouns", type: "text" },
            { name: "dob", label: "Date of Birth *", type: "date" },
            {
              name: "address",
              label: "Your Address (Small Heath/Bordesley Green) *",
              type: "text",
            },
            {
              name: "postcode",
              label: "Postcode (Small Heath/Bordesley Green) *",
              type: "text",
            },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-sm text-gray-300">{field.label}</label>
              <input
                name={field.name}
                type={field.type}
                value={form[field.name]}
                onChange={handleInput}
                required={field.label.includes("*")}
                className="w-full bg-black text-white px-4 py-3 mt-1 outline-none rounded-md"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-white text-black font-bold px-10 py-4 hover:bg-red-600 hover:text-white transition rounded-md"
          >
            Submit (WhatsApp)
          </button>
        </form>
      </div>
    </div>
  );
}
