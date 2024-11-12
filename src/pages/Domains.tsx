import { motion } from "framer-motion";
import { Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { v4 as uuidv4 } from 'uuid';

const Domains = () => {
  const { addToCart } = useCart();

  const handlePurchase = (domain: any) => {
    addToCart({
      id: uuidv4(),
      name: domain.tld,
      price: Number(domain.price.replace('$', '')),
      type: 'domain',
      details: domain.description
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Đang tìm kiếm tên miền...");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          Tìm Tên Miền Hoàn Hảo Của Bạn
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tìm kiếm và đăng ký tên miền cho trang web của bạn. Chúng tôi cung cấp giá cả 
          cạnh tranh và quản lý DNS miễn phí.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto mb-16">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Nhập tên miền của bạn..."
              className="w-full"
            />
          </div>
          <Button type="submit">
            <Search className="w-4 h-4 mr-2" />
            Tìm Kiếm
          </Button>
        </form>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            tld: ".com",
            price: "$12",
            description: "Hoàn hảo cho các trang web thương mại",
          },
          {
            tld: ".net",
            price: "$10",
            description: "Lý tưởng cho dịch vụ mạng",
          },
          {
            tld: ".org",
            price: "$9",
            description: "Tuyệt vời cho tổ chức",
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
                  <span className="text-gray-600">/năm</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => handlePurchase(domain)}
                >
                  Thêm Vào Giỏ Hàng
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Domains;