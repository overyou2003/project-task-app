import CardBox from "@/components/cardBox";
import { ProjectDashMock } from "@/components/ProjectDashMock";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";



const HomePage = () => {
  return (
    <div className="w-full h-full bg-linear-to-r from-blue-50 to-white">
      <div className="py-30 px-20 flex justify-center gap-10 items-center">
        <div>
          <h1 className="title-content text-4xl">
            Streamline Your <br />
            <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Workflow</span>
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
        <div className="w-1/3 transition-all duration-200 skew-1 hover:skew-0 hover:scale-105">
          <ProjectDashMock />
        </div>
      </div>
      <div className="justify-items-center">
        <div className="text-center">
          <h1 className="subtitle-content">Everything you need to stay organized</h1>
          <p className="text-gray-500">Powerful features designed to help teams collaborate efficiently and <br />deliver projects on time.</p>
        </div>
      </div>
      <div className="flex px-10 py-20 justify-center flex-wrap">
        <CardBox 
          icon={<RiTeamFill className="text-4xl text-cyan-500" />}
          title="Team Collaboration"
          description="Work together seamlessly with shared boards, task assignments, and real-time updates that keep everyone in sync."
        />
        <CardBox 
          icon={<IoChatboxEllipses className="text-4xl text-cyan-500" />}
          title="Real-time Chat"
          description="Communicate instantly with built-in messaging, file sharing, and threaded conversations right within your projects."
        />
        <CardBox 
          icon={<FaMobileAlt className="text-4xl text-cyan-500" />}
          title="Mobile Sync"
          description="Stay productive anywhere with native mobile apps that sync perfectly across all your devices and platforms."
        />
      </div>
    </div>
  );
};
export default HomePage;
