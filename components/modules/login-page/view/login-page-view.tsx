"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginFormValues } from "@/schemas/login";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { ListTodo, Loader2 } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function LoginPageView() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    // if (user) {
    //   console.log("Login successful");
    //   await new Promise((resolve) => setTimeout(resolve, 1500));
    //   form.reset({ email: "", password: "" });
    //   router.push("/dashboard");
    // } else {
    //   form.setError("email", {
    //     type: "manual",
    //     message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
    //   });
    //   form.setError("password", {
    //     type: "manual",
    //     message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
    //   });
    // }
    setLoading(true);
    try {
      const data = {
        email: values.email,
        password: values.password,
      };

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include"
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result.error);
        form.setError("email", {
          type: "manual",
          message: "",
        });
        form.setError("password", {
          type: "manual",
          message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
        });
        //setServerError(result.error);
        return;
      }

      router.push("/dashboard");
      form.reset();
    } catch (error) {
      //setServerError("Network error. Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="justify-center py-10">
          <CardTitle className="text-3xl font-semibold flex gap-2">
            <ListTodo
              className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg w-8 h-8 md:w-10 md:h-10"
              color="#fff"
            />
            DreamsTask
          </CardTitle>
        </CardHeader>
        <CardContent className="px-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      อีเมล<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel>
                        รหัสผ่าน<span className="text-red-500">*</span>
                      </FormLabel>
                      <a
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-blue-500"
                      >
                        ลืมรหัสผ่าน?
                      </a>
                    </div>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full mt-4 primary-button-color"
                variant="loginBtn"
                disabled={loading}
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex-col gap-5 pt-0">
          <hr className="w-full border-t border-gray-300" />
          <div className="flex gap-1 items-center justify-center">
            <p className="text-sm lg:text-base text-gray-400 font-semibold">
              ไม่มีบัญชีใช่ไหม ?
            </p>
            <a
              href="/register"
              className="text-sm lg:text-base underline-offset-4 hover:underline text-blue-600 font-semibold"
            >
              ลงทะเบียน
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
