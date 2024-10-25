import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FloatingIcons = () => {
  return (
    <div className="fixed -left-1 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-2 p-2   py-5 bg-white/40 border-2 shadow-md rounded-r-xl backdrop-blur-md">
      <a
        href="https://wa.me/+917899114456"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-all"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={16} />
      </a>
      <a
        href="https://maps.app.goo.gl/pxM5jkw3xizhn1ePA"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-all"
        aria-label="Location"
      >
        <FaMapMarkerAlt size={16} />
      </a>
      <a
        href="https://www.instagram.com/peps.omr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-2 rounded-full shadow-lg hover:bg-pink-600 transition-all"
        aria-label="Location"
      >
        <FaInstagram size={18} />
      </a>
    </div>
  );
};

export default FloatingIcons;
