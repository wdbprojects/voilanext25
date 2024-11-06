import Link from "next/link";
import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./favorite-toggle-button";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { id, name, price, image } = product;
        const dollarsAmount = formatCurrency(price);

        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="transform transition-shadow duration-500 group-hover:shadow-xl">
                <CardContent className="p-4">
                  <div className="relative h-64 overflow-hidden rounded md:h-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px)50vw, 33vw"
                      priority
                      className="w-full transform rounded object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg capitalize text-muted-foreground">
                      {name}
                    </h2>
                    <p className="mt-2 text-2xl font-bold text-primary">
                      {dollarsAmount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="z-5 absolute right-7 top-7">
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
