"use client";

import CardBox from "@/components/cardBox";
import { ProjectDashMock } from "@/components/project-DashMock";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import LandingPageBanner from "../landing-page-banner";

const LandingPageView = () => {
  return (
    <div className="w-full h-full bg-linear-to-r from-blue-50 to-white">
      <LandingPageBanner />
      <div className="justify-items-center">
        <div className="text-center my-25">
          <h1 className="subtitle-content">
            Everything you need to stay organized
          </h1>
          <p className="text-gray-500">
            Powerful features designed to help teams collaborate efficiently and{" "}
            <br />
            deliver projects on time.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        <CardBox
          icon={
            <RiTeamFill className="text-5xl text-white bg-linear-to-r from-pink-400 to-red-400 rounded-lg p-3 mb-3" />
          }
          title="Team Collaboration"
          description="Work together seamlessly with shared boards, task assignments, and real-time updates that keep everyone in sync."
        />
        <CardBox
          icon={
            <IoChatboxEllipses className="text-5xl text-white bg-linear-to-r from-blue-400 to-cyan-400 rounded-lg p-3 mb-3" />
          }
          title="Real-time Chat"
          description="Communicate instantly with built-in messaging, file sharing, and threaded conversations right within your projects."
        />
        <CardBox
          icon={
            <FaMobileAlt className="text-5xl text-white bg-linear-to-r from-purple-400 to-violet-500 rounded-lg p-3 mb-3" />
          }
          title="Mobile Sync"
          description="Stay productive anywhere with native mobile apps that sync perfectly across all your devices and platforms."
        />
      </div>
    </div>
  );
};

export default LandingPageView;
