import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const ContactUs = () => {
  const { theme } = useContext(UserContext);

  return (
    <div className={`${theme === "light" ? "bg-gray-50 text-gray-800" : "bg-gray-900 text-gray-200"} transition-colors duration-500`}>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We’d love to hear from you! Whether you have a question about orders,
          feedback, or anything else — our team is here to help.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {["📞 Phone +91 98765 43210", "📧 Email support@eatmate.com", "📍 Address Bandra West, Mumbai, India"].map((info, idx) => (
          <div
            key={idx}
            className={`${theme === "light" ? "bg-white text-gray-700" : "bg-gray-800 text-gray-200"} p-6 rounded-lg shadow-md hover:shadow-lg transition-colors duration-500`}
          >
            <h3 className="text-xl font-semibold mb-2">{info.split(" ")[0]}</h3>
            <p>{info.split(" ").slice(1).join(" ")}</p>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-8">Send us a Message</h2>
        <form onSubmit={(e) => e.preventDefault()} className={`${theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-gray-200"} max-w-2xl mx-auto p-8 rounded-lg shadow-md space-y-6 transition-colors duration-500`}>
          <div>
            <label className="block text-left font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`${theme === "light" ? "border-gray-300 text-gray-800 placeholder-gray-400" : "border-gray-600 text-gray-200 placeholder-gray-400"} w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-colors duration-500`}
            />
          </div>

          <div>
            <label className="block text-left font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`${theme === "light" ? "border-gray-300 text-gray-800 placeholder-gray-400" : "border-gray-600 text-gray-200 placeholder-gray-400"} w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-colors duration-500`}
            />
          </div>

          <div>
            <label className="block text-left font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className={`${theme === "light" ? "border-gray-300 text-gray-800 placeholder-gray-400" : "border-gray-600 text-gray-200 placeholder-gray-400"} w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-colors duration-500`}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
