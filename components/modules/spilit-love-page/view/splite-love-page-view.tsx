"use client";

import BtnCreateBoard from "@/components/btn-create-board";
import { use, useEffect, useState } from "react";
import { User } from "@/types/dashboard/user";
import CardApp from "@/components/card-app";
import { Meteors } from "@/components/ui/meteors";
import CardMainSum from "../components/card-main-sum";
export default function SplitLovePageView() {
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

  const AutoDate = () => {
    const [today, setToday] = useState(new Date());

    useEffect(() => {
      const now = new Date();

      // เวลาเที่ยงคืนถัดไป
      const nextMidnight = new Date();
      nextMidnight.setHours(24, 0, 0, 0);

      const msUntilMidnight = nextMidnight.getTime() - now.getTime();

      const timeout = setTimeout(() => {
        setToday(new Date());

        // หลังจากข้ามวันแล้ว ให้อัปเดตทุก 24 ชม.
        const interval = setInterval(() => {
          setToday(new Date());
        }, 24 * 60 * 60 * 1000);

        return () => clearInterval(interval);
      }, msUntilMidnight);

      return () => clearTimeout(timeout);
    }, []);

    return (
      <p>
        {today.toLocaleDateString("th-TH", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
    );
  };

  return (
    <div className="flex flex-1 flex-col gap-2 p-6 lg:p-6 xl:px-50 2xl:px-70 pt-0 relative">
      <div className="my-4">
        <div className="relative flex h-[100px] lg:h-[150px] w-full flex-col items-center justify-center overflow-hidden">
          <Meteors number={30} />
          <span className="pointer-events-none bg-gradient-to-b from-black to-black-300/80 bg-clip-text text-center lg:text-7xl text-3xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
            Expense $
          </span>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-light py-2">Overview</h1>
          <h1 className="text-gray-500">{AutoDate()}</h1>
        </div>
      </div>
      <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6 md">
        <CardMainSum is_owe={true} />
        <CardMainSum is_owe={false} />
        {items}
      </div>
      <BtnCreateBoard />
    </div>
  );
}
