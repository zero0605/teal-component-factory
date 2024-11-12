import { motion } from "framer-motion";
import { Server, Cpu, Memory, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "sonner";

const BasicVPS = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (plan: string, price: number) => {
    addToCart({
      id: uuidv4(),
      name: `Basic ${plan} VPS`,
      price,
      type: 'vps',
      quantity: 1,
      details: `Basic VPS Plan - ${plan}`
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
        <h1 className="text-4xl font-bold mb-4">Basic VPS Plans</h1>
        <p className="text-gray-600">Affordable and reliable virtual private servers for your projects</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2 mb-4">
            <Server className="w-6 h-6 text-teal-500" />
            <h2 className="text-2xl font-bold">Starter</h2>
          </div>
          <div className="text-3xl font-bold text-teal-500 mb-6">$5/month</div>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-500" />
              1 vCPU
            </li>
            <li className="flex items-center gap-2">
              <Memory className="w-5 h-5 text-teal-500" />
              2GB RAM
            </li>
            <li className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-teal-500" />
              20GB SSD
            </li>
          </ul>
          <Button 
            onClick={() => handleAddToCart('Starter', 5)}
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
            <h2 className="text-2xl font-bold">Basic Plus</h2>
          </div>
          <div className="text-3xl font-bold text-teal-500 mb-6">$10/month</div>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-500" />
              2 vCPU
            </li>
            <li className="flex items-center gap-2">
              <Memory className="w-5 h-5 text-teal-500" />
              4GB RAM
            </li>
            <li className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-teal-500" />
              40GB SSD
            </li>
          </ul>
          <Button 
            onClick={() => handleAddToCart('Basic Plus', 10)}
            className="w-full"
          >
            Add to Cart
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BasicVPS;