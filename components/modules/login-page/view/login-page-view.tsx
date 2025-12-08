"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginFormValues } from "@/schemas/login"; // สร้างไฟล์นี้
import { useRouter } from "next/navigation";
// 2. นำเข้า Form Components จาก shadcn/ui
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, // สำคัญมากสำหรับแสดง error
} from "@/components/ui/form";

import { ListTodo } from "lucide-react";
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

export default function LoginPageView() {
  const router = useRouter();
  const users = [
    {
      email: "user@example.com",
      password: "12345678",
    },
  ];
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormValues) {
    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      console.log("Login successful");
      form.reset({ email: "", password: "" });
      router.push("/dashboard");
    } else {
      form.setError("email", {
        type: "manual",
        message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
      });
      form.setError("password", {
        type: "manual",
        message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
      });
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
            TaskFlow
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email<span className="text-red-500">*</span>
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
                        Password<span className="text-red-500">*</span>
                      </FormLabel>
                      <a
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-blue-500"
                      >
                        Forgot password?
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
                className="w-full mt-4"
                variant="loginBtn"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "กำลังเข้าสู่ระบบ..." : "Login"}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex-col gap-5 pt-0">
          <hr className="w-full border-t border-gray-300" />
          <div className="flex gap-1 items-center justify-center">
            <p className="text-sm lg:text-base text-gray-400 font-semibold">
              Doesn&apos;t have an account ?
            </p>
            <a
              href="/register"
              className="text-sm lg:text-base underline-offset-4 hover:underline text-blue-600 font-semibold"
            >
              Signup
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
