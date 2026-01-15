"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import { TbLogout } from "react-icons/tb";

export function NavLogout() {
  const router = useRouter();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <SidebarMenuButton
              variant="clean"
              size="lg"
              tooltip="Logout"
              className={cn(
                "bg-transparent text-red-500 border border-red-500 rounded-full flex justify-center items-center gap-1 cursor-pointer hover:bg-red-500 hover:text-white mb-2 duration-250 transition-all",
                { "justify-center ": isCollapsed } // ถ้า collapsed ให้วาง icon กลาง
              )}
            >
              <TbLogout style={{ width: 22, height: 22 }} />
              <span className="font-semibold">
                {!isCollapsed && "Logout"}{" "}
                {/* ถ้าไม่ได้ collapsed ให้แสดงข้อความ */}
              </span>
            </SidebarMenuButton>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>ยืนยันการออกจากระบบ</AlertDialogTitle>
              <AlertDialogDescription>
                คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer">
                ยกเลิก
              </AlertDialogCancel>
              <AlertDialogAction
                className="cursor-pointer primary-button-color"
                onClick={async () => {
                  await fetch("/api/auth/logout", {
                    method: "POST",
                    credentials: "include",
                  });
                  router.push("/login");
                }}
              >
                ออกจากระบบ
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
