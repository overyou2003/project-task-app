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
import { ArrowRightIcon, Plus } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { DueDatePicker } from "./due-date-picker";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const ModalInput = () => {
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
            <DialogContent className="sm:max-w-[530px]">
              <DialogHeader>
                <DialogTitle>สร้างโปรเจกต์ใหม่</DialogTitle>
                <DialogDescription>
                  เริ่มต้นแผนงานใหม่ของคุณด้วยการกรอกข้อมูลพื้นฐาน
                </DialogDescription>
              </DialogHeader>
              <Separator />
              <div className="grid gap-6 my-3">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">ชื่อโปรเจกต์</Label>
                  <Input
                    id="name-1"
                    name="name"
                    placeholder="กรุณากรอกชื่อโปรเจกต์ของคุณ"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="desc">คำอธิบาย</Label>
                  <Textarea
                    id="username-1"
                    name="username"
                    placeholder="กรุณากรอกคำอธิบายโปรเจกต์ของคุณ"
                  />
                </div>
                <div className="grid gap-3">
                  <DueDatePicker label="วันครบกำหนด" />
                </div>
                <div className="grid cursor-pointer gap-3">
                  <Card className="w-full py-0 shadow-sm!">
                    <CardContent className="p-1">
                      <Collapsible className="data-[state=open] rounded-md">
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" className="group w-full cursor-pointer">
                            <Label htmlFor="desc">แท็ก / หมวดหมู่</Label>
                            <ChevronDown className="ml-auto group-data-[state=open]:rotate-180" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                          <div>
                            <TagInput />
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>
                  <Card className="w-full py-0 shadow-sm!">
                    <CardContent className="p-1">
                      <Collapsible className="data-[state=open] rounded-md">
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" className="group w-full cursor-pointer">
                            <Label htmlFor="desc">ระดับความสำคัญ</Label>
                            <ChevronDown className="ml-auto group-data-[state=open]:rotate-180" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-3 text-sm">
                          <div>
                            <PiorityLevel />
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="cursor-pointer">
                    ยกเลิก
                  </Button>
                </DialogClose>
                <Button type="submit" className="cursor-pointer">
                  ดำเนินการต่อ
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </>
  );
};
export default ModalInput;
