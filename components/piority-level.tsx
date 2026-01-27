"use client"

import { Flag } from "lucide-react";
import { useState } from "react";

const PiorityLevel = () => {
  type Priority = "low" | "medium" | "high";
  const [formData, setFormData] = useState({
    priority: "medium" as Priority,
  });
  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-3">
          {[
            {
              id: "high",
              label: "High Priority",
              color: "text-red-700 bg-red-100 border-red-200 hover:bg-red-200",
              active: "ring-2 ring-red-500 ring-offset-1",
            },
            {
              id: "medium",
              label: "Medium Priority",
              color:
                "text-amber-700 bg-amber-100 border-amber-200 hover:bg-amber-200",
              active: "ring-2 ring-amber-500 ring-offset-1",
            },
            {
              id: "low",
              label: "Low Priority",
              color:
                "text-emerald-700 bg-emerald-100 border-emerald-200 hover:bg-emerald-200",
              active: "ring-2 ring-emerald-500 ring-offset-1",
            },
          ].map((priority) => (
            <button
              key={priority.id}
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  priority: priority.id as Priority,
                })
              }
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer border text-sm font-medium transition-all ${priority.color} ${formData.priority === priority.id ? priority.active : "opacity-70 hover:opacity-100"}`}
            >
              <Flag
                size={14}
                className={
                  formData.priority === priority.id ? "fill-current" : ""
                }
              />
              {priority.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PiorityLevel;
