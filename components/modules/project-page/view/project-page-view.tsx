"use client";

import { LightRays } from "@/components/ui/light-rays";
import ColumnInProject from "../components/column_in_project";
import DoneBox from "../components/done-box";
import InprogressBox from "../components/inprogress-box";
import TodoBox from "../components/todo-box";
import { Avatar, AvatarGroup } from "@heroui/react";
import { MoreHorizontal, Share2 } from "lucide-react";

const ProjectPageView = () => {
  const MOCK_COL = [
    {
      title: "TO DO",
      task_count: 0,
    },
    {
      title: "IN PROGRESS",
      task_count: 0,
    },
    {
      title: "DONE",
      task_count: 0,
    },
    {
      title: "TEST",
      task_count: 1,
    },
    {
      title: "TEST",
      task_count: 1,
    },
    {
      title: "TEST",
      task_count: 1,
    },
  ];
  return (
    <div className="w-full flex flex-col h-[calc(100dvh-6rem)]">
      <div className="relative h-auto shrink-0 w-full rounded-2xl border border-slate-200 bg-white/50 p-6 mb-5 mt-2">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Project</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-700">
              Website Design
            </h1>
          </div>

          <div className="flex items-center gap-3 justify-between md:justify-end w-full md:w-auto">
            <div className="flex -space-x-2 mr-2">
               <AvatarGroup
                size="sm"
                isBordered
                max={4}
                renderCount={(count) => (
                  <p className="text-xs text-slate-500 font-medium ms-2">
                    +{count}
                  </p>
                )}
                total={10}
                className="cursor-pointer"
              >
                <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" className="w-8 h-8" />
                <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" className="w-8 h-8" />
                <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie" className="w-8 h-8" />
                <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=David" className="w-8 h-8" />
              </AvatarGroup>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm">
                <Share2 size={16} className="mr-2" />
                Share
              </button> 
              <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-x-auto min-h-0">
        <div className="flex flex-row gap-6 min-w-max h-full">
          {MOCK_COL.map((m, index) => (
            <ColumnInProject
              key={index}
              title={m.title}
              task_count={m.task_count}
            />
          ))}
          {/* <TodoBox/>
        <InprogressBox/>
        <DoneBox/> */}
        </div>
      </div>
    </div>
  );
};
export default ProjectPageView;
