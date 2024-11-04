import { fetchFeaturedProducts } from "@/actions/product-actions";
import SectionTitle from "@/components/global/section-title";
import EmptyList from "@/components/global/empty-list";
import ProductsGrid from "@/components/products/products-grid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-16">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
};
export default FeaturedProducts;
