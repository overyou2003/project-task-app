"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { TbLogout } from "react-icons/tb";

export function NavLogout() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          variant="clean"
          size="lg"
          tooltip="Logout"
          className={cn(
            "bg-red-500 text-white rounded-full flex justify-center items-center gap-1 cursor-pointer hover:bg-red-600 hover:text-base mb-2 duration-250 transition-all",
            { "justify-center " : isCollapsed } // ถ้า collapsed ให้วาง icon กลาง
          )}
        >
          <TbLogout style={{ width: 22, height: 22 }} />
          <span className="font-semibold">
            {!isCollapsed && "Logout"}{" "}
            {/* ถ้าไม่ได้ collapsed ให้แสดงข้อความ */}
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
