import { Star } from "lucide-react";

const ProductRating = ({ productId }: { productId: string }) => {
  void productId;
  const rating = 4.2;
  const count = 25;
  const countValue = `(${count}) reviews`;
  return (
    <span className="text-md mb-4 mt-1 flex items-center gap-1">
      <Star className="h-3 w-3" />
      {rating} {countValue}
    </span>
  );
};
export default ProductRating;
