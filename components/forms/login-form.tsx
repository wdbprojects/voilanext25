"use client";

import { useState, useTransition } from "react";
import CardWrapper from "@/components/shared/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginFormSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
//import { useSearchParams } from "next/navigation";
import { loginAction } from "@/actions/auth-actions";
import AlertComp from "@/components/shared/alert-comp";
const LoginForm = () => {
  //const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [info, setInfo] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit, control, reset } = form;

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    startTransition(async () => {
      try {
        const data = await loginAction(values);
        if (data && data.error) {
          setError(data.error);
          setSuccess("");
          setInfo("");
        } else if (data && data.success) {
          setSuccess(data.success);
          setError("");
          setInfo("");
        } else if (data && data.info) {
          setInfo(data.info);
          setError("");
          setSuccess("");
        }
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome back!"
      linkButtonHref="/auth/register"
      linkButtonLabel="Don't have an account? Register..."
      showSocial={true}
    >
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your email"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      disabled={isPending}
                      placeholder="Enter your password"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {error || success || info ? (
            <div className="!mt-6 flex flex-col gap-2">
              <AlertComp type="success" title="Success" message={success} />
              <AlertComp type="destructive" title="Error" message={error} />
              <AlertComp type="info" title="Info" message={info} />
            </div>
          ) : null}

          <div className="!my-6 flex items-center justify-between gap-3">
            <Button
              type="reset"
              variant="secondary"
              className="w-full"
              disabled={isPending}
              onClick={() => {
                reset();
                setError("");
                setSuccess("");
                setInfo("");
              }}
            >
              Reset form
            </Button>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <LoaderCircle className="mr-1 h-4 w-4 animate-spin" />
              ) : null}
              <span>Login</span>
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default LoginForm;
