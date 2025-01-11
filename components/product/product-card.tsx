import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import ProductStar from "./product-star";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="grid h-[275px] md:h-[300px] overflow-hidden dark:bg-white">
      <CardHeader className="p-0 bg-white dark:bg-white gap-0 space-y-0">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={160}
            height={160}
            priority
            className="object-cover mx-auto pt-2 pb-1 w-40"
          />
        </Link>
      </CardHeader>
      <CardContent className="px-3 md:pb-0 grid  dark:bg-white text-gray-500">
        <div className="text-xs text-gray-500">{product.brand}</div>
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-sm font-medium text-gray-700">{product.name}</h2>
        </Link>
      </CardContent>
      <CardFooter className="px-3  h-0 py-0  md:mt-5 flex items-center justify-between  md:px-2 dark:bg-white ">
        <ProductStar rating={Number(product.rating)} />
        {product.stock > 0 ? (
          <ProductPrice value={Number(product.price)} />
        ) : (
          <p className="text-red-400 text-sm font-semibold">Out Of Stock</p>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
