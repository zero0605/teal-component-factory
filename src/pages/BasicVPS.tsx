import { motion } from "framer-motion";
import { Server, Cpu, MemoryStick, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "sonner";

const BasicVPS = () => {
  const { addToCart } = useCart();

  const handlePurchase = (plan: string, price: number) => {
    addToCart({
      id: uuidv4(),
      name: `Basic VPS - ${plan}`,
      price,
      type: 'vps',
      quantity: 1,
      details: `Basic VPS Package - ${plan}`
    });
    toast.success(`Added Basic VPS - ${plan} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Basic VPS Hosting</h1>
        <p className="text-gray-600">Affordable and reliable virtual private servers for small projects</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-lg border shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Starter</h2>
          <div className="mb-6">
            <span className="text-3xl font-bold text-teal-500">$5</span>/month
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-500" />
              1 vCPU
            </li>
            <li className="flex items-center gap-2">
              <MemoryStick className="w-5 h-5 text-teal-500" />
              1GB RAM
            </li>
            <li className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-teal-500" />
              20GB SSD
            </li>
            <li className="flex items-center gap-2">
              <Server className="w-5 h-5 text-teal-500" />
              1TB Transfer
            </li>
          </ul>
          <Button 
            className="w-full"
            onClick={() => handlePurchase('Starter', 5)}
          >
            Select Plan
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-lg border shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Basic Plus</h2>
          <div className="mb-6">
            <span className="text-3xl font-bold text-teal-500">$10</span>/month
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-500" />
              2 vCPU
            </li>
            <li className="flex items-center gap-2">
              <MemoryStick className="w-5 h-5 text-teal-500" />
              2GB RAM
            </li>
            <li className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-teal-500" />
              40GB SSD
            </li>
            <li className="flex items-center gap-2">
              <Server className="w-5 h-5 text-teal-500" />
              2TB Transfer
            </li>
          </ul>
          <Button 
            className="w-full"
            onClick={() => handlePurchase('Basic Plus', 10)}
          >
            Select Plan
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BasicVPS;