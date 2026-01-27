"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar"; // Assuming Calendar exists, if not I'll use simple input first or check file list again. I saw calendar.tsx
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Task {
  id?: string;
  title: string;
  description?: string;
  tags?: string[];
  dueDate?: Date | string;
  assignee?: {
    name: string;
    image?: string;
  };
}

interface TaskDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
  onSave: (updatedTask: Task) => void;
}

const TaskDetailModal = ({ isOpen, onClose, task, onSave }: TaskDetailModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setTags(task.tags ? task.tags.join(", ") : "");
      
      if (task.dueDate) {
          try {
              setDueDate(new Date(task.dueDate));
          } catch (e) {
              setDueDate(undefined);
          }
      } else {
        setDueDate(undefined);
      }
    }
  }, [task, isOpen]);

  const handleSave = () => {
    if (!task) return;

    const updatedTask: Task = {
      ...task,
      title,
      description,
      tags: tags.split(",").map((t) => t.trim()).filter((t) => t !== ""),
      dueDate: dueDate,
    };
    onSave(updatedTask);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Task Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          
          {/* Title */}
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-left font-semibold">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>

          {/* Description */}
          <div className="grid gap-2">
             <Label htmlFor="description" className="text-left font-semibold">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add more details about this task..."
              className="min-h-[100px]"
            />
          </div>

          {/* Tags */}
          <div className="grid gap-2">
            <Label htmlFor="tags" className="text-left font-semibold">
              Tags (comma separated)
            </Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Design, UI, High Priority"
            />
          </div>

          {/* Due Date */}
          <div className="grid gap-2">
            <Label className="text-left font-semibold">Due Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dueDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dueDate}
                  onSelect={setDueDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailModal;
