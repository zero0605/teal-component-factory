import { motion } from "framer-motion";
import { BookOpen, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with VPS Hosting",
    excerpt: "Learn the basics of VPS hosting and how to choose the right plan for your needs.",
    date: "March 15, 2024",
    author: "John Doe",
    category: "Tutorials"
  },
  {
    id: 2,
    title: "10 Tips for Domain Management",
    excerpt: "Essential tips for managing your domain portfolio effectively.",
    date: "March 12, 2024",
    author: "Jane Smith",
    category: "Domain Management"
  },
  {
    id: 3,
    title: "Security Best Practices for Your Server",
    excerpt: "Keep your server secure with these essential security practices.",
    date: "March 10, 2024",
    author: "Mike Johnson",
    category: "Security"
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
            Our <span className="gradient-text">Blog</span>
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
                  <span>Read More</span>
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