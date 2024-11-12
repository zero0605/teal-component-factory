import { motion } from "framer-motion";
import { Server, Globe, Database, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-6 rounded-lg bg-white card-shadow hover-card-shadow"
  >
    <Icon className="w-10 h-10 text-teal-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const PricingCard = ({ title, price, features }: { title: string; price: string; features: string[] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="p-6 rounded-lg bg-white card-shadow hover-card-shadow"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-4xl font-bold mb-4">${price}<span className="text-sm text-gray-600">/tháng</span></p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <ArrowRight className="w-4 h-4 text-teal-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full mt-6 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors">
      Bắt Đầu Ngay
    </button>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1,y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Tăng Cường Sự Hiện Diện Số Của Bạn Với
              <span className="gradient-text"> Hosting Cao Cấp</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              VPS hiệu năng cao, hosting đáng tin cậy và dịch vụ tên miền cho ý tưởng lớn tiếp theo của bạn
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <Link
                to="/login"
                className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Bắt Đầu Ngay
              </Link>
              <button className="border-2 border-teal-500 text-teal-500 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors">
                Tìm Hiểu Thêm
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Tại Sao Chọn Dịch Vụ Của Chúng Tôi?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Server}
              title="VPS Hiệu Năng Cao"
              description="Máy chủ nhanh như chớp với tài nguyên đảm bảo và quyền truy cập root đầy đủ"
            />
            <FeatureCard
              icon={Globe}
              title="Dịch Vụ Tên Miền"
              description="Đăng ký và quản lý tên miền với giá cả cạnh tranh và quản lý DNS miễn phí"
            />
            <FeatureCard
              icon={Database}
              title="Hosting Đáng Tin Cậy"
              description="Đảm bảo thời gian hoạt động 99.9% với hỗ trợ chuyên gia 24/7 và sao lưu tự động"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Bảng Giá Đơn Giản, Minh Bạch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Cơ Bản"
              price="29"
              features={[
                "2 CPU Core",
                "4GB RAM",
                "80GB SSD",
                "2TB Băng Thông",
                "Hỗ Trợ 24/7"
              ]}
            />
            <PricingCard
              title="Chuyên Nghiệp"
              price="59"
              features={[
                "4 CPU Core",
                "8GB RAM",
                "160GB SSD",
                "4TB Băng Thông",
                "Hỗ Trợ Ưu Tiên"
              ]}
            />
            <PricingCard
              title="Doanh Nghiệp"
              price="99"
              features={[
                "8 CPU Core",
                "16GB RAM",
                "320GB SSD",
                "8TB Băng Thông",
                "Hỗ Trợ Riêng"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;