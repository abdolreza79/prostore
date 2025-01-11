import ProductList from "@/components/product/product-list";
import { getLatestProducts } from "@/lib/actions/product";

export const metadata = {
  title: "Home",
};
const HomePage = async () => {
  const products = await getLatestProducts();
  return (
    <section>
      <ProductList data={products} title="Newset Arrivals" />
    </section>
  );
};

export default HomePage;
