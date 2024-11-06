import { Button } from "@/components/ui/button";

const AddToCart = ({ productId }: { productId: string }) => {
  void productId;
  return (
    <Button
      variant="ringHover"
      className="mt-8 min-w-[250px] capitalize"
      size="sm"
    >
      add to cart
    </Button>
  );
};
export default AddToCart;
