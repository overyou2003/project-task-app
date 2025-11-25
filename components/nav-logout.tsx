"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { TbLogout } from "react-icons/tb";

export function NavLogout() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="border-1 border-red-400 rounded-xl data-[state=open]:bg-sidebar-accent
          flex justify-center items-center gap-1
          data-[state=open]:text-sidebar-accent-foreground hover:bg-red-400 text-red-400 hover:text-white"
        >
          <span className="text-sm font-bold truncate max-w-[100px] 
            data-[state=open]:inline hidden">Logout</span>
          <TbLogout style={{ width: 18, height: 18 }}/>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
