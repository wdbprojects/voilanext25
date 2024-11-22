import { TriangleAlert } from "lucide-react";

interface SuccessMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: SuccessMessageProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 px-2 py-1 text-sm text-destructive">
      <TriangleAlert className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
export default ErrorMessage;
