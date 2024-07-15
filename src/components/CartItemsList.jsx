import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartItemsList() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.cartID} cartItem={item} />
      ))}
    </>
  );
}

export default CartItemsList;
