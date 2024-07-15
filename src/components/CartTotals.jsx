import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cart,
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* Subtotal  */}
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* Shipping */}
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* Tax */}
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* Order Total */}
        <p className="mt-4 flex justify-between pb-2 text-sm">
          <span>Order Total</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
}

export default CartTotals;
