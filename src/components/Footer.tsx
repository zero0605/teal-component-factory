import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About HostPro</h3>
            <p className="text-gray-600">
              Premium hosting solutions for businesses of all sizes. Reliable, secure, and scalable.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-teal-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vps" className="text-gray-600 hover:text-teal-500 transition-colors">
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link to="/domains" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Domain Names
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex items-center justify-center text-gray-600">
          <Copyright className="w-4 h-4 mr-2" />
          <p>{new Date().getFullYear()} HostPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;