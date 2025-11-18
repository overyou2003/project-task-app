import Link from "next/link";
import { ListTodo } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 md:px-20 py-4 md:py-5 backdrop-blur bg-white/70 items-center font-sans shadow-sm fixed overflow-hidden top-0 left-0 right-0 z-50">
      <div className="flex">
        <Link
          href="/"
          className="flex gap-2 text-lg md:text-xl items-center title-content"
        >
          <ListTodo
            className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg w-8 h-8 md:w-10 md:h-10"
            color="#fff"
          />
          TASKFLOW
        </Link>
      </div>
      <div className="flex gap-2 md:gap-4 items-center text-gray-500 hover:text-gray-700">
        <Link href="/" className="text-sm md:text-base font-medium">
          Login
        </Link>
        <Button
          asChild
          className="bg-blue-500 hover:bg-blue-600 
            text-white font-semibold h-9 px-3 text-sm md:h-10 md:px-4 md:text-base rounded-lg transition-colors duration-300"
        >
          <Link href="/">Sign Up</Link>
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
