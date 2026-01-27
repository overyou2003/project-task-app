import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BottomTask from "./ui/bottom-task";

interface TaskCardProps {
  title?: string;
  description?: string;
  tags?: string[];
  dueDate?: string | Date;
  assignee?: {
    name: string;
    image?: string;
  };
  onClick?: () => void;
}

const TaskCard = ({
  title = "Design System",
  tags = ["Design", "UI", "Framework"],
  dueDate = new Date(),
  assignee = { 
    name: "Patiphat B", 
    image: "https://github.com/shadcn.png" 
  }, // Mock default
  onClick
}: TaskCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="group w-full p-4 rounded-xl bg-white border border-slate-100 shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out relative overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform duration-500" />

      <div className="flex justify-between items-start gap-3 mb-2">
        <h1 className="font-semibold text-slate-800 leading-snug line-clamp-2">
          {title}
        </h1>
        {assignee && (
          <Avatar className="h-8 w-8 border-2 border-white shadow-sm shrink-0">
            <AvatarImage src={assignee.image} alt={assignee.name} />
            <AvatarFallback className="bg-indigo-100 text-indigo-600 text-xs font-bold">
              {assignee.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        )}
      </div>

      <div className="mt-4">
        <BottomTask tags={tags} dueDate={dueDate} />
      </div>
    </div>
  );
};

export default TaskCard;
