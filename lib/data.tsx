import { ReactElement } from "react";
import {
  Group,
  HeartPulse,
  House,
  PackageCheck,
  ShoppingCart,
  Store,
} from "lucide-react";

type NavLink = {
  id: number;
  href: string;
  label: string;
  icon: ReactElement;
};

export const links: NavLink[] = [
  { id: 1, href: "/", label: "home", icon: <House className="mr-2 h-4 w-4" /> },
  {
    id: 2,
    href: "/about",
    label: "about",
    icon: <Group className="mr-2 h-4 w-4" />,
  },
  {
    id: 3,
    href: "/products",
    label: "products",
    icon: <Store className="mr-2 h-4 w-4" />,
  },
  {
    id: 4,
    href: "/favorites",
    label: "favorites",
    icon: <HeartPulse className="mr-2 h-4 w-4" />,
  },
  {
    id: 5,
    href: "/cart",
    label: "cart",
    icon: <ShoppingCart className="mr-2 h-4 w-4" />,
  },
  {
    id: 6,
    href: "/orders",
    label: "orders",
    icon: <PackageCheck className="mr-2 h-4 w-4" />,
  },
];
