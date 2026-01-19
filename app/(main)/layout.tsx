import { AppSidebar } from "@/components/app-sidebar";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AvatarUser from "@/components/avatar-user";
import Link from "next/link";
import Image from 'next/image'
import logo from '../../public/logo-taskapp-nobg.png'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex !h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-4">
              <div className="flex items-center gap-5 w-full">
                {/* <Link href="/">
                  <Image
                    src={logo}
                    alt="ชื่อบริษัทหรือชื่อเว็บ"
                    width={70} // กำหนดความกว้างที่ต้องการ
                    height={50} // กำหนดความสูงที่ต้องการ
                    priority // ใส่ property นี้เพื่อให้โลโก้โหลดทันที (LCP)
                  />
                </Link> */}
                <SidebarTrigger className="-ml-1" />
                <Input
                  icon={<CiSearch size={18} />}
                  placeholder={`Search projects tasks, or people...`}
                  className="w-full lg:w-[600px]"
                />
                <AvatarUser />
              </div>
            </header>
            <hr />

            {children}
          </SidebarInset>
        </SidebarProvider>
      </main>
    </div>
  );
}
