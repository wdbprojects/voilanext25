"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/data/routes";
import { signIn } from "next-auth/react";

const Social = () => {
  const [isPending, startTransition] = useTransition();

  const handleOnClick = (provider: "google" | "google") => {
    startTransition(() => {
      signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
    });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="sm"
        className="w-full"
        variant="outline"
        disabled={isPending}
        onClick={() => {}}
      >
        Github
      </Button>
      <Button
        size="sm"
        className="w-full"
        variant="outline"
        disabled={isPending}
        onClick={() => {}}
      >
        Google
      </Button>
    </div>
  );
};
export default Social;
