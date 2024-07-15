import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  function addToCart() {
    const cartProduct = {
      cartID: product.id + productColor,
      productID: product.id,
      image,
      title,
      price,
      amount,
      productColor,
      company,
    };
    dispatch(addItem({ product: cartProduct }));
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="breadcrumbs text-base">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="h-96 w-96 rounded-lg object-cover lg:w-full"
        />
        {/* Information */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="mt-2 text-xl font-bold text-neutral-content">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* Colors */}
          <div className="mt-6">
            <h4 className="text-base font-medium tracking-wider">Colors</h4>
            <div className="mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`badge mr-2 h-6 w-6 ${color === productColor && "border-2 border-secondary"}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              ))}
            </div>
          </div>
          {/* Amount */}
          <div className="form-control w-full max-w-xs">
            <label className="label px-0">
              <h4 className="text-base font-medium tracking-wider">Amount</h4>
            </label>
            <select
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              className="select select-bordered select-secondary select-md"
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          {/* Add to cart */}
          <div className="mt-10">
            <button className="btn btn-secondary uppercase" onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch.get(`/products/${id}`),
  };
};

export function loader(queryClient) {
  return async function ({ params }) {
    const res = await queryClient.ensureQueryData(
      singleProductQuery(params.id),
    );
    const product = res.data.data;

    return { product };
  };
}

export default SingleProduct;
