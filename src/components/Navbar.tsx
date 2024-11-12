import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Server, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
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
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-gray-600 hover:text-teal-500 transition-colors ${
                location.pathname === "/" ? "text-teal-500" : ""
              }`}
            >
              Trang Chủ
            </Link>
            <Link 
              to="/vps" 
              className={`text-gray-600 hover:text-teal-500 transition-colors ${
                location.pathname === "/vps" ? "text-teal-500" : ""
              }`}
            >
              VPS
            </Link>
            <Link 
              to="/domains" 
              className={`text-gray-600 hover:text-teal-500 transition-colors ${
                location.pathname === "/domains" ? "text-teal-500" : ""
              }`}
            >
              Tên Miền
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-600 hover:text-teal-500 transition-colors ${
                location.pathname === "/about" ? "text-teal-500" : ""
              }`}
            >
              Về Chúng Tôi
            </Link>
            <Link 
              to="/blog" 
              className={`text-gray-600 hover:text-teal-500 transition-colors ${
                location.pathname === "/blog" ? "text-teal-500" : ""
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/reviews" 
              className={`text-gray-600 hover:text-teal-500 transition-colors ${
                location.pathname === "/reviews" ? "text-teal-500" : ""
              }`}
            >
              Đánh Giá
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-600 hover:text-teal-500 transition-colors ${
                location.pathname === "/contact" ? "text-teal-500" : ""
              }`}
            >
              Liên Hệ
            </Link>
            <Link
              to="/login"
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Đăng Nhập
            </Link>
            <Link
              to="/cart"
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Giỏ Hàng
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;