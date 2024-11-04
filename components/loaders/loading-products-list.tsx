import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const LoadingProductsList = () => {
  return (
    <div className="pt-0">
      <Skeleton className="mb-4 h-8 w-96 text-3xl font-medium capitalize tracking-wider" />
      <Separator />

      <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
      </div>
    </div>
  );
};
export default LoadingProductsList;

const LoadingProduct = () => {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="mt-4 h-4 w-3/4" />
        <Skeleton className="mt-4 h-4 w-1/2" />
      </CardContent>
    </Card>
  );
};
