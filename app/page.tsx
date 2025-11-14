import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePage = () => {
  return (
    <>
      <div className="mt-20 px-20 flex w-fit justify-between gap-10">
        <div>
          <h1 className="title-content text-4xl">
            Streamline Your <br />
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Workflow</span>
          </h1>
          <p className="w-90 mt-5">
            Transform chaos into clarity with TaskFlow intuitive task management platform. Collaborate seamlessly and achieve more together.
          </p>
          <Button asChild className="btn-linear">
            <Link href="#">
              Get Started Free<FaArrowRightLong />
            </Link>
          </Button>
        </div>
        <div>
          <h1>Project Image Hover</h1>
        </div>
      </div>
      <div className="justify-items-center mt-30">
        <div className="text-center">
          <h1 className="subtitle-content">Everything you need to stay organized</h1>
          <p className="text-gray-500">Powerful features designed to help teams collaborate efficiently and <br />deliver projects on time.</p>
        </div>
      </div>
    </>
  );
};
export default HomePage;
