import { motion } from "framer-motion";
import { User, Users, Building, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Về <span className="gradient-text">HostPro</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg card-shadow"
            >
              <User className="w-10 h-10 text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Sứ Mệnh Của Chúng Tôi</h2>
              <p className="text-gray-600">
                Cung cấp giải pháp hosting cấp doanh nghiệp giúp các doanh nghiệp 
                phát triển và thành công trong thế giới số.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg card-shadow"
            >
              <Users className="w-10 h-10 text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Đội Ngũ Của Chúng Tôi</h2>
              <p className="text-gray-600">
                Một nhóm chuyên gia hosting tận tâm cam kết cung cấp 
                hỗ trợ 24/7 và giải pháp sáng tạo.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg card-shadow"
            >
              <Building className="w-10 h-10 text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Cơ Sở Hạ Tầng</h2>
              <p className="text-gray-600">
                Trung tâm dữ liệu hiện đại được trang bị công nghệ mới nhất 
                đảm bảo thời gian hoạt động 99.9%.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg card-shadow"
            >
              <Award className="w-10 h-10 text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Thành Tựu</h2>
              <p className="text-gray-600">
                Nhiều giải thưởng trong ngành về dịch vụ hosting xuất sắc 
                và sự hài lòng của khách hàng.
              </p>
            </motion.div>
          </div>

          <div className="bg-white p-8 rounded-lg card-shadow">
            <h2 className="text-2xl font-semibold mb-4">Câu Chuyện Của Chúng Tôi</h2>
            <p className="text-gray-600 mb-4">
              Được thành lập vào năm 2020, HostPro đã phát triển từ một công ty khởi nghiệp nhỏ 
              thành nhà cung cấp giải pháp hosting hàng đầu. Hành trình của chúng tôi được thúc đẩy 
              bởi niềm đam mê công nghệ và cam kết về sự thành công của khách hàng.
            </p>
            <p className="text-gray-600">
              Ngày nay, chúng tôi phục vụ hàng nghìn khách hàng trên toàn thế giới, từ các nhà 
              phát triển cá nhân đến doanh nghiệp lớn, cung cấp cho họ giải pháp hosting đáng tin cậy 
              và hỗ trợ xuất sắc.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;