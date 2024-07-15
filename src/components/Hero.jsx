import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

function Hero() {
  return (
    <div className="grid items-center gap-24 lg:grid-cols-2">
      {/* Information */}
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary uppercase">
            Our products
          </Link>
        </div>
      </div>
      {/* Image */}
      <div className="carousel-center hidden h-[28rem] space-x-4 rounded-box bg-neutral p-4 lg:carousel">
        {carouselImages.map((image) => (
          <div key={image} className="carousel-item">
            <img src={image} className="h-full w-80 rounded-box object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
