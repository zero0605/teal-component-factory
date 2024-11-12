import { motion } from "framer-motion";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    company: "Tech Solutions Inc.",
    rating: 5,
    comment: "Dịch vụ hosting tuyệt vời! Hiệu suất VPS xuất sắc và đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ.",
    date: "15 Tháng 3, 2024"
  },
  {
    id: 2,
    name: "Trần Thị B",
    company: "Digital Marketing Agency",
    rating: 5,
    comment: "Chúng tôi đã sử dụng HostPro cho các trang web khách hàng và rất hài lòng. Thời gian hoạt động đáng kinh ngạc.",
    date: "12 Tháng 3, 2024"
  },
  {
    id: 3,
    name: "Lê Văn C",
    company: "E-commerce Solutions",
    rating: 4,
    comment: "Giá trị tuyệt vời cho chi phí. Hiệu suất máy chủ xuất sắc và bảng điều khiển rất dễ sử dụng.",
    date: "10 Tháng 3, 2024"
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Đánh Giá <span className="gradient-text">Khách Hàng</span>
          </h1>

          <div className="grid gap-8">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg card-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{review.name}</h3>
                    <p className="text-gray-600">{review.company}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{review.comment}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{review.date}</span>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Khách Hàng Đã Xác Thực</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;