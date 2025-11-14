import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="mt-20 px-20  w-fit">
      <div>
        <h1 className="text-5xl font-bold">
          Streamline Your <br />
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Workflow</span>
        </h1>
        <p className="w-90 mt-5">
          Transform chaos into clarity with TaskFlow intuitive task management platform. Collaborate seamlessly and achieve more together.
        </p>
        <Button asChild className="bg-linear-to-r from-sky-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-6 mt-5 rounded-lg font-semibold text-base 
                                    transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <Link href="#">
            Get Started Free<FaArrowRightLong />
          </Link>
        </Button>
      </div>
      <div>

      </div>
    </div>
  );
};
export default HomePage;
