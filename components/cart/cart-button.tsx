import Link from "next/link";
import { Button } from "../ui/button";
import { ShoppingBasket } from "lucide-react";

const CartButton = () => {
  const numItemsCart = 69;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex items-center justify-center"
    >
      <Link href="/cart">
        <ShoppingBasket size={24} strokeWidth={2} />
        <span className="absolute right-[-10px] top-[-10px] flex h-5 w-5 items-center justify-center rounded-full bg-primary p-1 text-center text-xs font-semibold text-white dark:text-foreground">
          {numItemsCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
