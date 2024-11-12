import { motion } from "framer-motion";
import { Server, Cpu, Ram, HardDrive, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "sonner";

const PremiumVPS = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (plan: string, price: number) => {
    addToCart({
      id: uuidv4(),
      name: `Premium ${plan} VPS`,
      price,
      type: 'vps',
      quantity: 1,
      details: `Premium VPS Plan - ${plan}`
    });
    toast.success(`Added ${plan} VPS to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Premium VPS Plans</h1>
        <p className="text-gray-600">High-performance virtual private servers for demanding applications</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2 mb-4">
            <Server className="w-6 h-6 text-teal-500" />
            <h2 className="text-2xl font-bold">Professional</h2>
          </div>
          <div className="text-3xl font-bold text-teal-500 mb-6">$20/month</div>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-500" />
              4 vCPU
            </li>
            <li className="flex items-center gap-2">
              <Ram className="w-5 h-5 text-teal-500" />
              8GB RAM
            </li>
            <li className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-teal-500" />
              100GB SSD
            </li>
            <li className="flex items-center gap-2">
              <Network className="w-5 h-5 text-teal-500" />
              5TB Bandwidth
            </li>
          </ul>
          <Button 
            onClick={() => handleAddToCart('Professional', 20)}
            className="w-full"
          >
            Add to Cart
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2 mb-4">
            <Server className="w-6 h-6 text-teal-500" />
            <h2 className="text-2xl font-bold">Enterprise</h2>
          </div>
          <div className="text-3xl font-bold text-teal-500 mb-6">$40/month</div>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-500" />
              8 vCPU
            </li>
            <li className="flex items-center gap-2">
              <Ram className="w-5 h-5 text-teal-500" />
              16GB RAM
            </li>
            <li className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-teal-500" />
              200GB SSD
            </li>
            <li className="flex items-center gap-2">
              <Network className="w-5 h-5 text-teal-500" />
              10TB Bandwidth
            </li>
          </ul>
          <Button 
            onClick={() => handleAddToCart('Enterprise', 40)}
            className="w-full"
          >
            Add to Cart
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumVPS;