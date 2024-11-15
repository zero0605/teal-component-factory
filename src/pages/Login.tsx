import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, Server, Globe, Database } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Đăng nhập thành công!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Chào Mừng Trở Lại!</h1>
          <p className="text-gray-600 mb-8">
            Đăng nhập để quản lý máy chủ, tên miền và dịch vụ hosting của bạn tại một nơi.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                <Server className="w-4 h-4 text-teal-500" />
              </div>
              <p className="text-gray-600">Quản lý VPS của bạn</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                <Globe className="w-4 h-4 text-teal-500" />
              </div>
              <p className="text-gray-600">Kiểm soát tên miền của bạn</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                <Database className="w-4 h-4 text-teal-500" />
              </div>
              <p className="text-gray-600">Giám sát hosting của bạn</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg card-shadow"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Địa Chỉ Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Nhập email của bạn"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mật Khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
                <span className="ml-2 text-sm text-gray-600">Ghi nhớ đăng nhập</span>
              </label>
              <a href="#" className="text-sm text-teal-500 hover:text-teal-600">
                Quên mật khẩu?
              </a>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Đăng Nhập
            </motion.button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Chưa có tài khoản?{" "}
            <a href="#" className="text-teal-500 hover:text-teal-600">
              Đăng ký
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;