"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SigninButton from "./SignButton";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { handleSubmit, control, formState } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    console.log(res);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[715px] h-[620px] bg-[#F0F1F3] flex flex-col justify-center items-center">
        <div className="mb-6">
        </div>
        <h1 className="font-semibold text-[22px] mb-6">Welcome Back</h1>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 w-[447px]"
          >
            <div className="">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#24272F] font-normal">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter email"
                        {...field}
                        style={{
                          borderColor: formState.errors.email ? "red" : "",
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#24272F] font-normal">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                        style={{
                          borderColor: formState.errors.password ? "red" : "",
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <p className="text-[#2157E9]">Forgot Password?</p>
            <div className="w-[362px] mx-auto flex flex-col justify-center items-center">
              <Button className="w-full mb-2" type="submit">
                SIGN IN
              </Button>
              <p>
                Don't have an account?{" "}
                <span
                  className="text-[#2157E9] mb-6 cursor-pointer"
                  onClick={() => router.replace("/signup")}
                >
                  Sign up
                </span>
              </p>
              <p className="mb-6">OR</p>
              <SigninButton />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
