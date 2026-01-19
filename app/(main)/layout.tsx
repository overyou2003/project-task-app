import { AppSidebar } from "@/components/app-sidebar";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

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
                <CiSearch size={24} className="text-gray-500" />
                <Input
                  placeholder="Search projects tasks, or people..."
                  className="w-[250px] md:w-[450px] lg:w-[500px]"
                />
              </div>
            </header>

            {children}
          </SidebarInset>
        </SidebarProvider>
      </main>
    </div>
  );
}
