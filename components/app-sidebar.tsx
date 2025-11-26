"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
  ListTodo,
} from "lucide-react"

import { GoGraph } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";


import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavLogout } from "./nav-logout";

// This is sample data.
const data = {
  user: {
    name: "Dreams",
    role: "Intern",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: GoGraph,
      isActive: true,
      items: [
      ],
    },
    
    {
      title: "My Tasks",
      url: "#",
      icon: ListTodo,
      items: [
      ],
    },
    {
      title: "Settings",
      url: "/setting-profile",
      icon: IoSettingsSharp,
      items: [
        {
          title: "Profile",
          url: "/setting-profile",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavLogout />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
