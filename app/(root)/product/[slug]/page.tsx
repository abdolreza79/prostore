import ProductImages from "@/components/product/product-images";
import ProductPrice from "@/components/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product";
import { notFound } from "next/navigation";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return (
    <section>
      <div className="grid gid-cols-1 md:grid-cols-5">
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className="h3-bold">{product.name}</h1>
            <p>
              {product.rating} of {product.numReviews} Reviews
            </p>
            <div className="flex flex-col md:flex-row md:items-center">
              <ProductPrice
                value={Number(product.price)}
                className="w-16 justify-center rounded-full bg-green-100 text-green-700 px-4 py-2"
              />
            </div>
            <div className="mt-10">
              <p>Description:</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Card className="">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p>Price :</p>
                <ProductPrice value={Number(product.price)} />
              </div>
              <div className="flex justify-between mb-4">
                <p>Status</p>
                {product.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out Of Stock</Badge>
                )}
              </div>
              <div className="flex-center">
                {product.stock > 0 && (
                  <Button className="w-full">Add To Cart</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
