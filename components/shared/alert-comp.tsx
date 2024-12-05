"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertProps {
  type: "default" | "success" | "info" | "destructive" | null | undefined;
  title: string;
  message?: string;
}

const AlertComp = ({ type, title, message }: AlertProps) => {
  if (!message) return null;

  return (
    <Alert variant={type}>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
export default AlertComp;
