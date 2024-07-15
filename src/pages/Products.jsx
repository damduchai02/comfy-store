import { customFetch } from "../utils";
import { Filters, PaginationContainer, ProductsContainer } from "../components";

const url = "/products";

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export function loader(queryClient) {
  return async function ({ request }) {
    // Convert URL to object
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const res = await queryClient.ensureQueryData(allProductsQuery(params));
    const products = res.data.data;
    const meta = res.data.meta;

    return { products, meta };
  };
}

export default Products;
