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
    <p className="text-4xl font-bold mb-4">${price}<span className="text-sm text-gray-600">/mo</span></p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <ArrowRight className="w-4 h-4 text-teal-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full mt-6 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors">
      Get Started
    </button>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Power Your Digital Presence with
              <span className="gradient-text"> Premium Hosting</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              High-performance VPS, reliable hosting, and domain services for your next big idea
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
                Get Started
              </Link>
              <button className="border-2 border-teal-500 text-teal-500 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Server}
              title="High-Performance VPS"
              description="Lightning-fast servers with guaranteed resources and full root access"
            />
            <FeatureCard
              icon={Globe}
              title="Domain Services"
              description="Register and manage domains with competitive pricing and free DNS management"
            />
            <FeatureCard
              icon={Database}
              title="Reliable Hosting"
              description="99.9% uptime guarantee with expert 24/7 support and automated backups"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="29"
              features={[
                "2 CPU Cores",
                "4GB RAM",
                "80GB SSD Storage",
                "2TB Bandwidth",
                "24/7 Support"
              ]}
            />
            <PricingCard
              title="Professional"
              price="59"
              features={[
                "4 CPU Cores",
                "8GB RAM",
                "160GB SSD Storage",
                "4TB Bandwidth",
                "Priority Support"
              ]}
            />
            <PricingCard
              title="Enterprise"
              price="99"
              features={[
                "8 CPU Cores",
                "16GB RAM",
                "320GB SSD Storage",
                "8TB Bandwidth",
                "Dedicated Support"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;