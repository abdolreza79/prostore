import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({ data, title }: { data: Product[]; title?: string }) => {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4 md:mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.length === 0 ? (
          <div>
            <p>No Products found</p>
          </div>
        ) : (
          data.map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
