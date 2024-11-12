import { motion } from "framer-motion";
import { Server, Cpu, MemoryStick, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "sonner";

const PremiumVPS = () => {
  const { addToCart } = useCart();

  const handlePurchase = (plan: string, price: number) => {
    addToCart({
      id: uuidv4(),
      name: `Premium VPS - ${plan}`,
      price,
      type: 'vps',
      quantity: 1,
      details: `Premium VPS Package - ${plan}`
    });
    toast.success(`Added Premium VPS - ${plan} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Premium VPS Hosting</h1>
        <p className="text-gray-600">High-performance virtual private servers for demanding applications</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-lg border shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Professional</h2>
          <div className="mb-6">
            <span className="text-3xl font-bold text-teal-500">$30</span>/month
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-500" />
              4 vCPU
            </li>
            <li className="flex items-center gap-2">
              <MemoryStick className="w-5 h-5 text-teal-500" />
              8GB RAM
            </li>
            <li className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-teal-500" />
              100GB SSD
            </li>
            <li className="flex items-center gap-2">
              <Server className="w-5 h-5 text-teal-500" />
              5TB Transfer
            </li>
          </ul>
          <Button 
            className="w-full"
            onClick={() => handlePurchase('Professional', 30)}
          >
            Select Plan
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-lg border shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
          <div className="mb-6">
            <span className="text-3xl font-bold text-teal-500">$50</span>/month
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-500" />
              8 vCPU
            </li>
            <li className="flex items-center gap-2">
              <MemoryStick className="w-5 h-5 text-teal-500" />
              16GB RAM
            </li>
            <li className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-teal-500" />
              200GB SSD
            </li>
            <li className="flex items-center gap-2">
              <Server className="w-5 h-5 text-teal-500" />
              10TB Transfer
            </li>
          </ul>
          <Button 
            className="w-full"
            onClick={() => handlePurchase('Enterprise', 50)}
          >
            Select Plan
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumVPS;