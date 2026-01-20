import React from "react";
import { Calendar, ListTodo, Users, MoreHorizontal, ChevronDownIcon, PencilIcon, TrashIcon } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
export type ProjectStatus = "active" | "completed" | "on-hold";
export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  taskCount: number;
  dueDate: string;
  teamSize: number;
  color: string;
}
interface ProjectCardProps {
  project: Project;
  onClick?: (id: string) => void;
}
const statusConfig = {
  active: {
    label: "Active",
    classes: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  completed: {
    label: "Completed",
    classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },
  "on-hold": {
    label: "On Hold",
    classes: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },
};
export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const status = statusConfig[project.status];
  return (
    <div
      onClick={() => onClick?.(project.id)}
      className="group relative flex flex-col bg-white rounded-xl border border-slate-200 p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden"
    >
      {/* Top Row: Icon/Color and Menu */}
      <div className="flex justify-between items-start mb-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold text-lg shadow-sm ${project.color}`}
        >
          {project.title.charAt(0)}
        </div>

        <button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-50 transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Title & Description */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-medium text-slate-600 mb-2">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${project.progress}%`,
              backgroundColor:
                project.status === "completed" ? "#10b981" : "#3b82f6",
            }}
          />
        </div>
      </div>

      {/* Footer: Metadata & Status */}
      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-slate-500 text-xs font-medium">
          <div className="flex items-center" title="Tasks">
            <ListTodo size={14} className="mr-1.5" />
            {project.taskCount}
          </div>
          <div className="flex items-center" title="Due Date">
            <Calendar size={14} className="mr-1.5" />
            {project.dueDate}
          </div>
          <div className="flex items-center" title="Team Size">
            <Users size={14} className="mr-1.5" />
            {project.teamSize}
          </div>
        </div>

        <div
          className={`flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${status.classes}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${status.dot}`} />
          {status.label}
        </div>
      </div>
    </div>
  );
}
