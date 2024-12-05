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
import { registerFormSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
//import { useSearchParams } from "next/navigation";
import { registerAction } from "@/actions/auth-actions";
import AlertComp from "@/components/shared/alert-comp";

const RegisterForm = () => {
  //const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [info, setInfo] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const { handleSubmit, control, reset } = form;

  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    startTransition(async () => {
      try {
        const data = await registerAction(values);
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
    reset();
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      linkButtonLabel="Already have an account? Login..."
      linkButtonHref="/auth/login"
      showSocial={true}
    >
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center justify-between gap-x-2">
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter your first name"
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
              name="lastName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter your last name"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
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
              <span>Register</span>
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default RegisterForm;
