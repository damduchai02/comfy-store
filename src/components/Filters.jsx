import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

function Filters() {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="grid items-center gap-x-4 gap-y-8 rounded-md bg-base-200 px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* Search */}
      <FormInput
        type="search"
        label="Search Product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* Categories */}
      <FormSelect
        label="Select Category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* Company */}
      <FormSelect
        label="Select Company"
        name="company"
        list={meta.categories}
        size="select-sm"
        defaultValue={company}
      />
      {/* Order */}
      <FormSelect
        label="Sort By"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* Price */}
      <FormRange
        label="Select Price"
        name="price"
        size="range-sm"
        price={price}
      />
      {/* Shipping */}
      <FormCheckbox
        label="Free Shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button type="submit" className="btn btn-primary btn-sm uppercase">
        Search
      </button>
      <Link
        to="/products"
        className="btn btn-accent btn-sm uppercase text-base-200"
      >
        Reset
      </Link>
    </Form>
  );
}

export default Filters;
