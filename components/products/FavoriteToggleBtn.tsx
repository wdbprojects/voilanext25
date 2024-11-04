import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const FavoriteToggleBtn = ({ productId }: { productId: string }) => {
  console.log(productId);

  return (
    <Button
      size="icon"
      variant="outline"
      className="cursor-pointer border-none bg-white/50 p-2 dark:bg-black/50"
    >
      <Heart />
    </Button>
  );
};
export default FavoriteToggleBtn;
