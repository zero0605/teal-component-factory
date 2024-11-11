import { motion } from "framer-motion";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    company: "Tech Solutions Inc.",
    rating: 5,
    comment: "Excellent hosting service! The VPS performance is outstanding and the support team is always helpful.",
    date: "March 15, 2024"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Digital Marketing Agency",
    rating: 5,
    comment: "We've been using HostPro for our client websites and couldn't be happier. The uptime is remarkable.",
    date: "March 12, 2024"
  },
  {
    id: 3,
    name: "Michael Brown",
    company: "E-commerce Solutions",
    rating: 4,
    comment: "Great value for money. The server performance is excellent and the control panel is user-friendly.",
    date: "March 10, 2024"
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
            Customer <span className="gradient-text">Reviews</span>
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
                    <span>Verified Customer</span>
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