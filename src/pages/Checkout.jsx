import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

function Checkout() {
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  if (cartTotal === 0) return <SectionTitle text="Your cart is empty" />;

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}

export function loader(store) {
  return function () {
    const user = store.getState().user.user;

    if (!user) {
      toast.warn("You must be logged in to checkout");
      return redirect("/login");
    }
    return null;
  };
}

export default Checkout;
