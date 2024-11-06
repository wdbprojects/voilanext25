import { fetchSingleProduct } from "@/actions/product-actions";
import BreadCrumbs from "@/components/single-product/bread-crumbs";
import FavoriteToggleButton from "@/components/products/favorite-toggle-button";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import AddToCart from "@/components/single-product/add-to-cart";
import ProductRating from "@/components/single-product/product-ratings";

interface SingleProductProps {
  params: Promise<{
    id: string;
  }>;
}

const SingleProduct = async ({ params }: SingleProductProps) => {
  const productParams = await params;

  const product = await fetchSingleProduct(productParams.id);
  const { name, image, company, description, price } = product;
  const dollarAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs productName={name} />

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-8">
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-x-8">
            <h1 className="text-2xl font-semibold capitalize">{name}</h1>
            <FavoriteToggleButton productId={productParams.id} />
          </div>
          <ProductRating productId={productParams.id} />
          <h4 className="mt-2 text-lg">{company}</h4>
          <p className="text-md mt-3 inline-block rounded bg-muted p-2">
            {dollarAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={productParams.id} />
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
