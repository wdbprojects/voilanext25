import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import FavoriteToggleBtn from "./FavoriteToggleBtn";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="mt-4 grid gap-y-4">
      {products.map((product) => {
        const { id, name, price, image, company, description } = product;
        const dollarsAmount = formatCurrency(price);

        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="transform transition-shadow duration-500 group-hover:shadow-xl">
                <CardContent className="grid gap-8 p-2 md:grid-cols-6">
                  <div className="relative col-span-2 h-64 w-full md:h-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="w-full rounded object-cover"
                    />
                  </div>
                  <div className="col-span-3">
                    <h2 className="text-xl font-semibold capitalize">{name}</h2>
                    <h4 className="text-lg font-medium italic text-muted-foreground">
                      {company}
                    </h4>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <p className="col-span-1 pr-1 text-xl font-bold text-primary md:ml-auto">
                    {dollarsAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <p className="z-5 absolute bottom-8 right-8">
              <FavoriteToggleBtn productId={id} />
            </p>
          </article>
        );
      })}
    </div>
  );
};
export default ProductsList;
