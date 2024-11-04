import { Separator } from "@/components/ui/separator";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-medium capitalize tracking-wider">
        {text}
      </h2>
      <Separator />
    </div>
  );
};
export default SectionTitle;
