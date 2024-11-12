import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Server, ShoppingCart, LogIn, UserPlus, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`${
                      location.pathname.includes("/vps") ? "text-teal-500" : ""
                    } px-4 py-2 hover:bg-gray-50 rounded-md transition-colors`}
                  >
                    VPS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[280px] p-4 shadow-lg rounded-lg bg-white border border-gray-100">
                      <Link
                        to="/vps/basic"
                        className="block p-3 hover:bg-gray-50 rounded-md transition-colors space-y-1 group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-teal-500">Basic VPS</div>
                        <p className="text-sm text-gray-500">Affordable VPS solutions for small projects</p>
                      </Link>
                      <Link
                        to="/vps/premium"
                        className="block p-3 mt-2 hover:bg-gray-50 rounded-md transition-colors space-y-1 group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-teal-500">Premium VPS</div>
                        <p className="text-sm text-gray-500">High-performance VPS for demanding applications</p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
            <div className="flex items-center space-x-2">
              <Link
                to="/login"
                className="bg-teal-500 text-white px-3 py-1.5 rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-1 text-sm"
              >
                <LogIn className="w-4 h-4" />
                Đăng Nhập
              </Link>
              <Link
                to="/register"
                className="bg-teal-600 text-white px-3 py-1.5 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-1 text-sm"
              >
                <UserPlus className="w-4 h-4" />
                Đăng Ký
              </Link>
              <Link
                to="/cart"
                className="bg-teal-500 text-white px-3 py-1.5 rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-1 text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                Giỏ Hàng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;