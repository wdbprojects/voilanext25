import ProductsContainer from "@/components/products/products-container";

interface ProductsPageProps {
  searchParams: Promise<{
    layout: string;
    search: string;
  }>;
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const awaitedSearchParams = await searchParams;

  const layout = awaitedSearchParams.layout || "grid";
  const search = awaitedSearchParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
};
export default ProductsPage;
