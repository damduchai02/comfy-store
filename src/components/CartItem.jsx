import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOptions } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  function handleAmount(e) {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  }

  function removeItemFromTheCart() {
    dispatch(removeItem({ cartID }));
  }

  return (
    <article className="mb-12 flex flex-col flex-wrap gap-y-4 border-b border-base-300 pb-6 last:mb-0 last:border-b-0 sm:flex-row">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg object-cover sm:h-32 sm:w-32"
      />
      {/* Information */}
      <div className="sm:ml-16 sm:w-48">
        {/* Title */}
        <h3 className="font-medium capitalize">{title}</h3>
        {/* Company */}
        <h4 className="mt-2 text-sm text-neutral-content">{company}</h4>
        {/* COLOR */}
        <p className="mt-4 flex items-center gap-x-2 text-sm">
          Color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/* Amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmount}
            className="select-base select select-bordered select-xs mt-2"
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* Remove */}
        <button
          onClick={removeItemFromTheCart}
          className="link-hover link link-primary mt-2 text-sm"
        >
          remove
        </button>
      </div>
      {/* Price */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
}

export default CartItem;
