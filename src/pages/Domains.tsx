import { motion } from "framer-motion";
import { Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Domains = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Searching for domain availability...");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          Find Your Perfect Domain Name
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Search and register domain names for your website. We offer competitive
          prices and free DNS management.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto mb-16">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Enter your domain name..."
              className="w-full"
            />
          </div>
          <Button type="submit">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            tld: ".com",
            price: "$12",
            description: "Perfect for commercial websites",
          },
          {
            tld: ".net",
            price: "$10",
            description: "Ideal for network services",
          },
          {
            tld: ".org",
            price: "$9",
            description: "Great for organizations",
          },
        ].map((domain) => (
          <motion.div
            key={domain.tld}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            className="hover-card-shadow"
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-2xl font-bold gradient-text">
                    {domain.tld}
                  </span>
                </CardTitle>
                <CardDescription>{domain.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <span className="text-3xl font-bold text-teal-500">
                    {domain.price}
                  </span>
                  <span className="text-gray-600">/year</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Domains;