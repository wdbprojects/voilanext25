import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className={cn("mb-2 text-2xl font-semibold")}>🔐 Voila</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
export default Header;
