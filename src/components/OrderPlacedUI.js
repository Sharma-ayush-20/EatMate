import React, { useContext, useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { UserContext } from "../utils/UserContext";
import Confetti from "react-confetti";

function OrderPlacedUI() {
  const { theme } = useContext(UserContext);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div
      className={`flex flex-col items-center justify-center h-screen p-6 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >

      {/* Confetti */}
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}

      <div
        className={`rounded-3xl p-10 flex flex-col items-center shadow-xl transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        {/* Success Icon */}
        <CheckCircle
          className={`w-20 h-20 mb-4 transition-colors duration-300 ${
            theme === "dark" ? "text-green-400" : "text-green-500"
          }`}
        />

        {/* Heading */}
        <h1
          className={`text-3xl font-bold mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Order Placed Successfully!
        </h1>

        {/* Subtext */}
        <p
          className={`text-center mb-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Thank you for your purchase. Your order has been placed and is being
          processed.
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 transform hover:scale-105 ${
            theme === "dark"
              ? "bg-green-500 hover:bg-green-400 text-white"
              : "bg-green-600 hover:bg-green-500 text-white"
          }`}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default OrderPlacedUI;
