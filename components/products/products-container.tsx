import { Suspense } from "react";
import { fetchAllProducts } from "@/actions/product-actions";
import { Separator } from "@/components/ui/separator";
import ProductsGrid from "@/components/products/products-grid";
import GridToggle from "@/components/products/grid-toggle";
import ProductsList from "@/components/products/products-list";
import LoadingProductsGrid from "@/components/loaders/loading-products-grid";
import LoadingProductsList from "@/components/loaders/loading-products-list";

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchAllProducts({ search: search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      {/* HEADER */}
      <section className="flex items-center justify-between">
        <h4 className="text-lg font-light">
          {totalProducts}{" "}
          <span className="font-bold">
            &nbsp;product{totalProducts > 1 ? "s" : ""}
          </span>{" "}
          in total
        </h4>
        <div className="flex gap-x-4">
          <GridToggle searchTerm={searchTerm} layout={layout} />
        </div>
      </section>
      <Separator className="my-2" />

      {/* PRODUCTS GRID/LIST */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl">
            Sorry, no products matched your search...{" "}
          </h5>
        ) : layout === "grid" ? (
          <Suspense fallback={<LoadingProductsGrid />}>
            <ProductsGrid products={products} />
          </Suspense>
        ) : (
          <Suspense fallback={<LoadingProductsList />}>
            <ProductsList products={products} />
          </Suspense>
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
