import { motion } from "framer-motion";
import { Server, Cpu, Memory, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const VPS = () => {
  const handlePurchase = (plan: string) => {
    toast.success(`Selected ${plan} plan! Redirecting to checkout...`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          High-Performance Virtual Private Servers
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Deploy your applications on our reliable and scalable VPS infrastructure.
          Choose the plan that fits your needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Starter",
            price: "$10",
            specs: {
              cpu: "2 vCPUs",
              ram: "2GB RAM",
              storage: "50GB SSD",
              bandwidth: "2TB Transfer",
            },
          },
          {
            name: "Professional",
            price: "$20",
            specs: {
              cpu: "4 vCPUs",
              ram: "8GB RAM",
              storage: "100GB SSD",
              bandwidth: "4TB Transfer",
            },
          },
          {
            name: "Enterprise",
            price: "$40",
            specs: {
              cpu: "8 vCPUs",
              ram: "16GB RAM",
              storage: "200GB SSD",
              bandwidth: "8TB Transfer",
            },
          },
        ].map((plan) => (
          <motion.div
            key={plan.name}
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
                    {plan.price}
                  </span>
                  /month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-teal-500" />
                    {plan.specs.cpu}
                  </li>
                  <li className="flex items-center gap-2">
                    <Memory className="w-5 h-5 text-teal-500" />
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
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => handlePurchase(plan.name)}
                >
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VPS;