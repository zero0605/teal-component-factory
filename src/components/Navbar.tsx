import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Server className="w-8 h-8 text-teal-500" />
            <span className="font-bold text-xl">HostPro</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-teal-500 transition-colors">
              Home
            </Link>
            <Link to="#" className="text-gray-600 hover:text-teal-500 transition-colors">
              VPS
            </Link>
            <Link to="#" className="text-gray-600 hover:text-teal-500 transition-colors">
              Hosting
            </Link>
            <Link to="#" className="text-gray-600 hover:text-teal-500 transition-colors">
              Domains
            </Link>
            <Link
              to="/login"
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;