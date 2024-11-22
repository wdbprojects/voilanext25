import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
}

const LinkButton = ({ href, label }: LinkButtonProps) => {
  return (
    <Button variant="link" asChild className="mx-auto" size="sm">
      <Link href={href}>{label}</Link>
    </Button>
  );
};
export default LinkButton;
