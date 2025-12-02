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

export default function RegisterPageView() {
  return (
    <div className="flex justify-center bg-gradient-to-r from-blue-50 to-white px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="justify-center">
          <CardTitle className="text-3xl text-center font-semibold flex gap-2">
            Create Your Account
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
            <div className="flex flex-col gap-6">
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
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirmPassword">
                    Confirm Password<span className="text-red-500">*</span>
                  </Label>
                </div>
                <Input id="confirmPassword" type="password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="fullName">
                    Full Name<span className="text-red-500">*</span>
                  </Label>
                </div>
                <Input id="fullName" type="text" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="phoneNumber">
                    Phone Number<span className="text-red-500">*</span>
                  </Label>
                </div>
                <Input id="phoneNumber" type="text" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-5">
          <Button type="submit" className="w-full" variant="registerBtn">
            Submit
          </Button>
          <hr className="w-full border-t border-gray-500" />
          <a
            href="/login"
            className="inline-block text-lg underline-offset-4 hover:underline text-blue-500!"
          >
            Already have an account?
          </a>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
