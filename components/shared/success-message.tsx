import { CircleCheckBig } from "lucide-react";

interface SuccessMessageProps {
  message?: string;
}

const SuccessMessage = ({ message }: SuccessMessageProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 px-2 py-1 text-sm text-emerald-500">
      <CircleCheckBig className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
export default SuccessMessage;
