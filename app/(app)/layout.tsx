import { AppSidebar } from "@/components/app-sidebar";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar } from "@radix-ui/react-avatar";
import { NavUser } from "@/components/nav-user";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreateFixBtn from "@/components/btn-create-board";
import CreateCardProject from "@/components/create-card-project";

const data = {
  user: {
    name: "Dreams",
    email: "m@example.com",
    avatar: "/avatars/dreams.jpg",
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 justify-between px-4">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
                <CiSearch size={24} className="text-gray-500" />
                <Input
                  placeholder="Search projects tasks, or people..."
                  className="w-[250px] md:w-[450px] lg:w-[500px]"
                />
              </div>
              <div>
                {/* <NavUser user={data.user} /> */}
                <Avatar className="hidden lg:inline-flex h-8 w-8 rounded-lg ml-4">
                  <AvatarImage src={data.user.avatar} alt={data.user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
              </div>
            </header>

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 relative">
              <div className="grid auto-rows-min md:grid-cols-4">
                {children}
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </main>
    </div>
  );
}
