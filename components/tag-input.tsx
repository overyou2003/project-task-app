"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const suggestedTags = ["งาน", "เรียน", "ด่วน", "ส่วนตัว", "โปรเจกต์"];

  return (
    <div>
      <div className="flex flex-wrap gap-1 my-2">
        {suggestedTags.map((tag) => (
          <Button
            key={tag}
            className="cursor-pointer bg-transparent text-black border border-gray-200 
            hover:bg-transparent hover:border-green-600 hover:text-green-600"
            size="sm"
            onClick={() => {
              if (!tags.includes(tag)) {
                setTags([...tags, tag]);
              }
            }}
          >
            {tag}
          </Button>
        ))}
      </div>

      <Input
        className="text-xs"
        placeholder="เพิ่มแท็กใหม่..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && input.trim()) {
            e.preventDefault();
            if (!tags.includes(input.trim())) {
              setTags([...tags, input.trim()]);
            }
            setInput("");
          }
        }}
      />

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="flex items-center gap-1"
          >
            {tag}
            <button
              onClick={() => setTags(tags.filter((t) => t !== tag))}
              className="ml-1 text-xs hover:text-red-500"
            >
              ✕
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};
export default TagInput;
