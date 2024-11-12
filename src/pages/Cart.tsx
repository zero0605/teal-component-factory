import { motion } from "framer-motion";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, total } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-2 mb-8">
          <ShoppingCart className="w-8 h-8 text-teal-500" />
          <h1 className="text-3xl font-bold">Giỏ Hàng</h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">Giỏ hàng của bạn đang trống</p>
            <Button onClick={() => navigate("/vps")}>Xem Các Gói VPS</Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.type.toUpperCase()}</p>
                    {item.details && (
                      <p className="text-sm text-gray-500">{item.details}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold">${item.price}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-gray-600">Tổng Cộng</p>
                <p className="text-2xl font-bold">${total}</p>
              </div>
              <Button onClick={() => navigate("/payment")}>
                Tiến Hành Thanh Toán
              </Button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;