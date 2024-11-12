import { useState } from "react";
import { formatPrice } from "../utils";

function FormRange({ label, name, size, price }) {
  const step = 100;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  console.log(selectedPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className="mt-2 flex w-full justify-between px-2 text-xs">
        <span className="font-bold">0</span>
        <span className="font-bold">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
}

export default FormRange;
