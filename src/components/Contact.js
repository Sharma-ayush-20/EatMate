import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
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
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
          <p className="text-gray-600">support@eatmate.com</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
          <p className="text-gray-600">Bandra West, Mumbai, India</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-8">Send us a Message</h2>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
