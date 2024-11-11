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
            About <span className="gradient-text">HostPro</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg card-shadow"
            >
              <User className="w-10 h-10 text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-gray-600">
                To provide enterprise-grade hosting solutions that empower businesses 
                to grow and succeed in the digital world.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg card-shadow"
            >
              <Users className="w-10 h-10 text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Our Team</h2>
              <p className="text-gray-600">
                A dedicated group of hosting experts committed to providing 
                24/7 support and innovative solutions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg card-shadow"
            >
              <Building className="w-10 h-10 text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Our Infrastructure</h2>
              <p className="text-gray-600">
                State-of-the-art data centers equipped with the latest technology 
                to ensure 99.9% uptime guarantee.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg card-shadow"
            >
              <Award className="w-10 h-10 text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Our Achievements</h2>
              <p className="text-gray-600">
                Multiple industry awards for excellence in hosting services 
                and customer satisfaction.
              </p>
            </motion.div>
          </div>

          <div className="bg-white p-8 rounded-lg card-shadow">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, HostPro has grown from a small startup to a leading 
              provider of hosting solutions. Our journey has been driven by a 
              passion for technology and a commitment to customer success.
            </p>
            <p className="text-gray-600">
              Today, we serve thousands of clients worldwide, from individual 
              developers to large enterprises, providing them with reliable hosting 
              solutions and exceptional support.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;