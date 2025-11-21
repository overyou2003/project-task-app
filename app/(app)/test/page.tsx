"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TestPage = () => {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <form action="{createProject}">
        <Input type="text" placeholder="Name" name="name" required/>
        <Button type="submit" variant="outline">
          Send
        </Button>
      </form>
    </div>
  );
};
export default TestPage;
