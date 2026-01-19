"use client";

import BtnCreateBoard from "@/components/btn-create-board";
import { BlurFade } from "@/components/ui/blur-fade";
import { useEffect, useState } from "react";
import { User } from "@/types/dashboard/user";
import CardApp from "@/components/card-app";
export default function DashboardPage() {
  const n = 3;
  const items = [];
  for (let i = 0; i < n; i++) {
    items.push(
      <CardApp
        key={i}
        title="SplitLove"
        subtitle="SubtitleTest"
        progress={10}
        duedate={10}
      />
    );
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/user", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-2 p-6 lg:p-6 pt-0 relative">
      <div className="my-4">
        <BlurFade delay={0.25} inView>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-5xl/none">
            สวัสดี ! 👋 {user?.name}
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-xl tracking-tighter text-pretty sm:text-2xl xl:text-3xl/none">
            ยินดีต้อนรับสู่เว็บไซต์เรา
          </span>
        </BlurFade>
        {/* <h1 className="text-3xl font-bold py-2">My Projects</h1>
        <p>Manage and track your project progress</p> */}
      </div>
      <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md">
        {items}
      </div>
      <BtnCreateBoard />
    </div>
  );
}
