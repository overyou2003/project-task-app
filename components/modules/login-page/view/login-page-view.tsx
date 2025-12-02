import { Button } from "@/components/ui/button";
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
          {/* <CardDescription>
            Enter your email below to login to your account
          </CardDescription> */}
          {/* <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-3">
              <div className="grid gap-2">
                <Label htmlFor="email">
                  Email<span className="text-red-500">*</span>
                </Label>
                <Input id="email" type="email" placeholder="" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">
                    Password<span className="text-red-500">*</span>
                  </Label>
                </div>
                <Input id="password" type="password" required />
                <a
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-blue-500!"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-5">
          <Button type="submit" className="w-full" variant="loginBtn">
            Login
          </Button>
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
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
