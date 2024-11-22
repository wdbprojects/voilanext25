import { Info } from "lucide-react";

interface SuccessMessageProps {
  message?: string;
}

const InfoMessage = ({ message }: SuccessMessageProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-blue-500/15 px-2 py-1 text-sm text-blue-500">
      <Info className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
export default InfoMessage;
