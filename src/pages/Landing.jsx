import { customFetch } from "../utils";
import { Hero, FeaturedProducts } from "../components";

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export function loader(queryClient) {
  return async function () {
    const res = await queryClient.ensureQueryData(featuredProductsQuery);
    const products = res.data.data;

    return { products };
  };
}

export default Landing;
