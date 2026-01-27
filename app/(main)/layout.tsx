"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AvatarUser from "@/components/avatar-user";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logo-lastest-ver.png";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const logoMiddleClass = "absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-white min-h-screen relative w-full max-w-full overflow-hidden">
        <header
          className="fixed top-0 right-0 z-40 flex h-16 shrink-0 items-center gap-2 bg-white px-4 border-b transition-[left] duration-300 ease-in-out
          left-0 group-has-[[data-collapsible=icon]]/sidebar-wrapper:left-[calc(var(--sidebar-width-icon)+1px)] md:left-[var(--sidebar-width)]"
        >
          <div className="flex items-center gap-5 w-full justify-between h-full">
            <div className="flex items-center w-full h-full">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="h-6! mx-3 bg-gray-300"
              />
              {pathname !== "/home-project/project" ? (
                <div className="ml-2 flex-1">
                  <Input
                    icon={<CiSearch size={18} />}
                    placeholder="ค้นหาโปรเจกต์..."
                    className="w-full lg:w-[600px]"
                  />
                </div>
              ) : (
                <div className="flex items-center h-5">
                  <div className={`${logoMiddleClass}`}>
                    <h1 className="text-2xl font-semibold text-slate-800">
                      <Image
                        src={logo}
                        width={110}
                        height={110}
                        alt="logo"
                      />
                    </h1>
                  </div>
                </div>
              )}
            </div>
            <Separator orientation="vertical" className="h-6! bg-gray-300" />
            <AvatarUser />
          </div>
        </header>

        <div className="h-16 w-full shrink-0" />

        <main className="flex-1 p-4 overflow-hidden w-full max-w-full">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
