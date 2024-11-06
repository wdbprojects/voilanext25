import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  void productId;

  return (
    <Button
      size="icon"
      variant="secondary"
      className="cursor-pointer border-none"
    >
      <Heart size={20} />
    </Button>
  );
};
export default FavoriteToggleButton;
