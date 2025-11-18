"use client";

import { ProjectDashMock } from "@/components/project-DashMock";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const LandingPageBanner = () => {
  return (
    <div className="max-w-6xl mx-auto grid w-full grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-y-0">
      <div className="w-full items-center">
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="title-content text-4xl lg:text-5xl w-full">
            Streamline Your <br />
            <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Workflow
            </span>
          </h1>
          <p className="w-full mt-5 xl:max-w-sm">
            Transform chaos into clarity with TaskFlow intuitive task management
            platform. Collaborate seamlessly and achieve more together.
          </p>
        </div>
        <div className="w-full flex justify-center xl:justify-start">
          <Button asChild className="btn-linear p-6 w-60 lg:w-50">
            <Link href="#">
              Get Started Free
              <FaArrowRightLong />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full transition-all duration-200 rotate-2 hover:rotate-0">
        <ProjectDashMock />
      </div>
    </div>
  );
};

export default LandingPageBanner;
