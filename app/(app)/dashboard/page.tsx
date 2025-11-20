import { AppSidebar } from "@/components/app-sidebar";
import { CiSearch } from "react-icons/ci";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
import CardProject from "@/components/cardProject";
import CreateFixBtn from "@/components/create-fixed-button";

const data = {
  user: {
    name: "Dreams",
    email: "m@example.com",
    avatar: "/avatars/dreams.jpg",
  },
};

export default function DashboardPage() {
  return (
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

            {/* ถ้าหากต้องการใช้ Breadcrumb */}
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
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

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min md:grid-cols-4">
            {/* <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" /> */}
            <CardProject
              title="Retospective"
              subtitle="dsadsadd"
              progress={10}
              duedate={10}
            />
          </div>
          <CreateFixBtn/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
