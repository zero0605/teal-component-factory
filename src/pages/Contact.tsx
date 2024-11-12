import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Liên Hệ <span className="gradient-text">Chúng Tôi</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg card-shadow">
                <Mail className="w-10 h-10 text-teal-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <p className="text-gray-600">support@hostpro.com</p>
              </div>

              <div className="bg-white p-6 rounded-lg card-shadow">
                <Phone className="w-10 h-10 text-teal-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Điện Thoại</h2>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>

              <div className="bg-white p-6 rounded-lg card-shadow">
                <MessageSquare className="w-10 h-10 text-teal-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Chat Trực Tuyến</h2>
                <p className="text-gray-600">Hỗ trợ 24/7</p>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg card-shadow space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ Tên
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tin Nhắn
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Gửi Tin Nhắn
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;