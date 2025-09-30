import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { theme } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className={`${theme === "light" ? "bg-gray-50 text-gray-800" : "bg-gray-900 text-gray-200"} transition-colors duration-500`}>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We’re on a mission to bring your favorite food from the best
          restaurants straight to your doorstep — fresh, fast, and hassle-free.
        </p>
      </section>

      {/* Mission */}
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"} max-w-3xl mx-auto`}>
          At <span className="font-semibold">EatMate</span>, we believe in
          transforming the way India eats. With the power of technology, we
          connect customers to thousands of restaurants, ensuring speed,
          reliability, and taste.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className={`${theme === "light" ? "bg-white" : "bg-gray-800"} py-12 px-6 md:px-20 transition-colors duration-500`}>
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className={`${theme === "light" ? "bg-gray-100 text-gray-700" : "bg-gray-700 text-gray-200"} p-6 rounded-lg shadow-md transition-colors duration-500`}>
            <h3 className="text-lg font-semibold mb-2">⚡ Fast Delivery</h3>
            <p>Get your food delivered in minutes.</p>
          </div>
          <div className={`${theme === "light" ? "bg-gray-100 text-gray-700" : "bg-gray-700 text-gray-200"} p-6 rounded-lg shadow-md transition-colors duration-500`}>
            <h3 className="text-lg font-semibold mb-2">🍔 Variety</h3>
            <p>Choose from 5000+ restaurants & cuisines.</p>
          </div>
          <div className={`${theme === "light" ? "bg-gray-100 text-gray-700" : "bg-gray-700 text-gray-200"} p-6 rounded-lg shadow-md transition-colors duration-500`}>
            <h3 className="text-lg font-semibold mb-2">💰 Best Offers</h3>
            <p>Save big with amazing discounts & deals.</p>
          </div>
          <div className={`${theme === "light" ? "bg-gray-100 text-gray-700" : "bg-gray-700 text-gray-200"} p-6 rounded-lg shadow-md transition-colors duration-500`}>
            <h3 className="text-lg font-semibold mb-2">📞 24/7 Support</h3>
            <p>We’re here whenever you need us.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`${theme === "light" ? "bg-gradient-to-r from-orange-100 to-red-100" : "bg-gray-800"} py-12 px-6 md:px-20 transition-colors duration-500`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-orange-600">50M+</h3>
            <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Orders Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-600">500+</h3>
            <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Cities Covered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-600">1L+</h3>
            <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Restaurants Partnered</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Hungry? We’re just a click away!
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
        >
          Order Now
        </button>
      </section>
    </div>
  );
};

export default About;
