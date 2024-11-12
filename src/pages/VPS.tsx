import { motion } from "framer-motion";
import { Server, Cpu, CircuitBoard, Network, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { toast } from "sonner";

const VPS_PLANS = [
  {
    name: "Cơ Bản",
    price: "10",
    specs: {
      cpu: "2 vCPUs",
      ram: "2GB RAM",
      storage: "50GB SSD",
      bandwidth: "2TB Băng Thông",
    },
  },
  {
    name: "Chuyên Nghiệp",
    price: "20",
    specs: {
      cpu: "4 vCPUs",
      ram: "8GB RAM",
      storage: "100GB SSD",
      bandwidth: "4TB Băng Thông",
    },
  },
  {
    name: "Doanh Nghiệp",
    price: "40",
    specs: {
      cpu: "8 vCPUs",
      ram: "16GB RAM",
      storage: "200GB SSD",
      bandwidth: "8TB Băng Thông",
    },
  },
];

const VPSCard = ({ plan }: { plan: typeof VPS_PLANS[0] }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handlePurchase = () => {
    addToCart({
      id: uuidv4(),
      name: plan.name,
      price: Number(plan.price) * quantity,
      type: 'vps',
      quantity,
      details: `${plan.specs.cpu}, ${plan.specs.ram}, ${plan.specs.storage}`
    });
    toast.success(`Đã thêm ${quantity} ${plan.name} VPS vào giỏ hàng`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="hover-card-shadow"
    >
      <Card>
        <CardHeader>
          <CardTitle>{plan.name}</CardTitle>
          <CardDescription>
            <span className="text-3xl font-bold text-teal-500">
              ${plan.price}
            </span>
            /tháng
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-500" />
              {plan.specs.cpu}
            </li>
            <li className="flex items-center gap-2">
              <CircuitBoard className="w-5 h-5 text-teal-500" />
              {plan.specs.ram}
            </li>
            <li className="flex items-center gap-2">
              <Server className="w-5 h-5 text-teal-500" />
              {plan.specs.storage}
            </li>
            <li className="flex items-center gap-2">
              <Network className="w-5 h-5 text-teal-500" />
              {plan.specs.bandwidth}
            </li>
          </ul>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Số Lượng
            </label>
            <Input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            className="w-full"
            onClick={handlePurchase}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Thêm Vào Giỏ Hàng
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const VPS = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          Máy Chủ Ảo Hiệu Năng Cao
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Triển khai ứng dụng của bạn trên cơ sở hạ tầng VPS đáng tin cậy và có khả năng mở rộng.
          Chọn gói phù hợp với nhu cầu của bạn.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {VPS_PLANS.map((plan) => (
          <VPSCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default VPS;