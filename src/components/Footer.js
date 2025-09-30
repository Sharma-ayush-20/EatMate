import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  const { theme } = useContext(UserContext); 

  return (
    <footer className={`${theme === "light" ? "bg-gray-100 text-gray-700" : "bg-gray-900 text-gray-200"} transition-colors duration-500 mt-1`}>
      
      {/* Top Section: Download Apps */}
      <div className="max-w-7xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center border-b transition-colors duration-500 border-gray-300">
        <p className="text-lg font-semibold mb-4 md:mb-0">
          For better experience, download the eatmate app now
        </p>
        <div className="flex gap-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Download Android App
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Download iOS App
          </button>
        </div>
      </div>

      {/* Middle Section: Links */}
      <div className="max-w-7xl mx-auto py-8 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 border-b border-gray-300 transition-colors duration-500">
        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>eatmate Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>eatmate One</li>
            <li>eatmate Instamart</li>
            <li>eatmate Dineout</li>
            <li>eatmate Genie</li>
            <li>Minis</li>
            <li>Pyng</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h4 className="font-semibold mb-2">Help & Support</h4>
          <ul className="space-y-1 text-sm">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
            <li>Life at eatmate</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-2">Explore with eatmate</h4>
          <ul className="space-y-1 text-sm">
            <li>eatmate News</li>
            <li>Snackables</li>
          </ul>
        </div>

        {/* Available Cities */}
        <div>
          <h4 className="font-semibold mb-2">Available in:</h4>
          <ul className="space-y-1 text-sm">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>679 cities</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-500">
        <p className="text-sm text-gray-500">{`© ${currYear} eatmate Limited`}</p>
        <div className="flex gap-4 text-xl">
          <FaLinkedin className={`hover:text-blue-700 cursor-pointer transition-colors ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`} />
          <FaInstagram className={`hover:text-pink-500 cursor-pointer transition-colors ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`} />
          <FaFacebook className={`hover:text-blue-600 cursor-pointer transition-colors ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`} />
          <FaPinterest className={`hover:text-red-500 cursor-pointer transition-colors ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`} />
          <FaTwitter className={`hover:text-blue-400 cursor-pointer transition-colors ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
