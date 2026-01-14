"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormValues, RegisterSchema } from "@/schemas/register";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ListTodo, Loader2 } from "lucide-react";

export default function RegisterPageView() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      // phoneNumber: "",
    },
  });

  async function onSubmit(values: RegisterFormValues) {
    setServerError(null);
    setLoading(true);

    try {
      const data = {
        email: values.email,
        password: values.password,
        name: values.fullName,
      };

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log("test");
        setServerError(result.error);
        return;
      }

      router.push("/login");
      form.reset();
    } catch (error) {
      setServerError("Network error. Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center w-full h-full mt-15">
      <Card className="w-full max-w-sm">
        <CardHeader className="justify-center py-5 text-center justify-items-center">
          <ListTodo
            className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg w- h-8 md:w-10 md:h-10"
            color="#fff"
          />
          <CardTitle className="text-3xl text-center font-semibold flex gap-2 justify-center">
            DreamsTask!
          </CardTitle>
          สมัครสมาชิกเพื่อเริ่มต้นใช้งาน
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
                    {/* Error จาก server (email ซ้ำ) */}
                    {serverError && (
                      <p className="text-red-500 text-sm mt-1">{serverError}</p>
                    )}
                  </FormItem>
                )}
              />
              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      รหัสผ่าน<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="กรอกรหัสผ่านของคุณ"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ยืนยันรหัสผ่าน<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="กรอกยืนยันรหัสผ่านของคุณ"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ชื่อเล่น<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="กรอกชื่อเล่นของคุณ"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Phone Number
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Phone Number<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="phoneNumber"
                        type="text"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <Button
                type="submit"
                className="w-full mt-4"
                variant="registerBtn"
                disabled={loading}
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? "กำลังลงทะเบียน..." : "ดำเนินการต่อ"}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex-col gap-5">
          <hr className="w-full border-t border-gray-300" />
          <a
            href="/login"
            className="inline-block text-lg underline-offset-4 hover:underline hover:text-gray-500 text-gray-400 font-semibold transition-all duration-100"
          >
            Already have an account ?
          </a>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
