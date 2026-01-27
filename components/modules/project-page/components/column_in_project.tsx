import { FaPlus } from "react-icons/fa";
import TaskCard from "./task-card";
import BtnNewTask from "./btn-new-task";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import TaskDetailModal, { Task } from "./task-detail-modal"; // Ensure Task type is exported or defined here

interface Props {
  title: string;
  task_count: number;
}

const ColumnInProject = ({ title, task_count }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design System",
      description: "Create a comprehensive design system for the project including colors, typography, and components.",
      tags: ["Design", "UI", "System"],
      assignee: { name: "Alice", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
      dueDate: new Date(),
    },
    {
      id: "2",
      title: "Implement Authentication",
      description: "Setup JWT authentication and user sessions.",
      tags: ["Backend", "Auth", "Security"],
      assignee: { name: "Bob", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" },
    },
    {
      id: "3",
      title: "Fix Navigation Bug",
      description: "Navigation bar is inconsistent on mobile devices.",
      tags: ["Bug", "Frontend", "High Priority"],
      assignee: { name: "Charlie", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie" },
      dueDate: new Date(Date.now() + 86400000 * 2),
    },
  ]);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleSaveTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  return (
    <div className="min-w-[300px] shrink-0 h-fit col-span-1 p-5 rounded-2xl 
      bg-gradient-to-b from-white to-slate-50 
      shadow-sm border border-slate-100 
      hover:shadow-md transition-shadow">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-slate-800 tracking-tight">
            {title}
          </h1>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {tasks.length}
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">
              <Pencil className="mr-2 h-4 w-4" />
              <span>แก้ไข</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 cursor-pointer focus:text-red-600 focus:bg-red-50">
              <Trash className="mr-2 h-4 w-4" />
              <span>ลบ</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-slate-200 mb-4" />

      {/* Task List */}
      <div className="space-y-3 mb-4 flex flex-col gap-1">
        {tasks.map((task, i) => (
          <TaskCard
            key={task.id || i}
            title={task.title}
            tags={task.tags}
            assignee={task.assignee}
            dueDate={task.dueDate}
            onClick={() => handleTaskClick(task)}
          />
        ))}
      </div>

      {/* Add Task */}
      <div className="w-full">
        <BtnNewTask />
      </div>

      <TaskDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        task={selectedTask}
        onSave={handleSaveTask}
      />
    </div>
  );
};
export default ColumnInProject;
