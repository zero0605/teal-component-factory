import { motion } from "framer-motion";
import { BookOpen, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Bắt Đầu Với VPS Hosting",
    excerpt: "Tìm hiểu những kiến thức cơ bản về VPS hosting và cách chọn gói phù hợp với nhu cầu của bạn.",
    date: "15 Tháng 3, 2024",
    author: "Nguyễn Văn A",
    category: "Hướng Dẫn"
  },
  {
    id: 2,
    title: "10 Mẹo Quản Lý Tên Miền",
    excerpt: "Những mẹo thiết yếu để quản lý danh mục tên miền của bạn một cách hiệu quả.",
    date: "12 Tháng 3, 2024",
    author: "Trần Thị B",
    category: "Quản Lý Tên Miền"
  },
  {
    id: 3,
    title: "Thực Hành Bảo Mật Tốt Nhất Cho Máy Chủ",
    excerpt: "Giữ máy chủ của bạn an toàn với những thực hành bảo mật thiết yếu này.",
    date: "10 Tháng 3, 2024",
    author: "Lê Văn C",
    category: "Bảo Mật"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">Blog</span> Của Chúng Tôi
          </h1>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg card-shadow"
              >
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 transition-colors"
                >
                  <span>Đọc Thêm</span>
                  <BookOpen className="w-4 h-4 ml-2" />
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;