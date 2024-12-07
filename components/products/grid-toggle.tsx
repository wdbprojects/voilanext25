"use client";
import { Button } from "@/components/ui/button";
import { Grid3X3, LayoutList } from "lucide-react";
import { useRouter } from "next/navigation";

const GridToggle = ({
  searchTerm,
  layout,
}: {
  searchTerm: string;
  layout: string;
}) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        disabled={layout === "grid"}
        onClick={() => {
          router.push(`?layout=grid${searchTerm}`);
        }}
      >
        <Grid3X3 size={20} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        disabled={layout === "list"}
        onClick={() => {
          router.push(`?layout=list${searchTerm}`);
        }}
      >
        <LayoutList size={20} />
      </Button>
    </div>
  );
};
export default GridToggle;
