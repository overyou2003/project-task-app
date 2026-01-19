import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowRightIcon, Plus } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const BtnNewProject = () => {
  return (
    <>
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline">
                <AnimatedShinyText className="cursor-pointer inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ New Project</span>
                  <ArrowRightIcon
                    scale={30}
                    className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  />
                </AnimatedShinyText>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>สร้างโปรเจกต์ใหม่</DialogTitle>
                <DialogDescription>
                  เริ่มต้นแผนงานใหม่ของคุณด้วยการกรอกข้อมูลพื้นฐาน
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">ชื่อโปรเจกต์</Label>
                  <Input
                    id="name-1"
                    name="name"
                    placeholder="กรุณากรอกชื่อโปรเจกต์ของคุณ"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">คำอธิบาย</Label>
                  <Textarea
                    id="username-1"
                    name="username"
                    placeholder="กรุณากรอกคำอธิบายโปรเจกต์ของคุณ"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="cursor-pointer">ยกเลิก</Button>
                </DialogClose>
                <Button type="submit" className="cursor-pointer">ดำเนินการต่อ</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </>
  );
};
export default BtnNewProject;
