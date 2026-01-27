import { BsCalendarDateFill } from "react-icons/bs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface BottomTaskProps {
  tags?: string[];
  dueDate?: string | Date;
}

const getRandomColorClass = (str: string) => {
  const colors = [
    "bg-red-400", "bg-orange-400", "bg-amber-400", "bg-yellow-400", "bg-lime-400",
    "bg-green-400", "bg-emerald-400", "bg-teal-400", "bg-cyan-400", "bg-sky-400",
    "bg-blue-400", "bg-indigo-400", "bg-violet-400", "bg-purple-400", "bg-fuchsia-400",
    "bg-pink-400", "bg-rose-400"
  ];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

const Tag = ({ tag }: { tag: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const colorClass = getRandomColorClass(tag);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            layout
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
              setIsExpanded(!isExpanded);
            }}
            className={cn(
              "h-2 rounded-full cursor-pointer transition-colors shrink-0",
              colorClass,
              isExpanded ? "h-6 px-3 flex items-center justify-center" : "w-8 hover:opacity-80"
            )}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{ minWidth: isExpanded ? "auto" : "2rem" }}
          >
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-xs font-semibold text-white whitespace-nowrap"
                >
                  {tag}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </TooltipTrigger>
        {!isExpanded && (
          <TooltipContent className="text-xs">
            <p>{tag}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

const BottomTask = ({ tags = [], dueDate }: BottomTaskProps) => {
  return (
    <div className="flex justify-between items-end mt-3">
      <div className="flex flex-wrap gap-1.5 items-center min-h-[1.5rem]">
        {tags.map((tag, i) => (
          <Tag key={`${tag}-${i}`} tag={tag} />
        ))}
      </div>
      
      {dueDate && (
        <div className="text-xs flex items-center gap-1.5 text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
          <BsCalendarDateFill className="text-slate-300" />
          <span className="font-medium">
             {new Date(dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </span>
        </div>
      )}
    </div>
  );
};

export default BottomTask;
