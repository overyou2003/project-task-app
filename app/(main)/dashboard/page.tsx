import BtnCreateBoard from "@/components/btn-create-board";
import CardProject from "@/components/cardProject";

export default function DashboardPage() {
  const n = 30;
  const items = [];
  for (let i = 0; i < n; i++) {
    items.push(<CardProject key={i} title="TitleTest" subtitle="SubtitleTest" progress={10} duedate={10} />);
  }
  return (
    <div className="flex flex-1 flex-col gap-2 p-6 lg:p-6 pt-0 relative bg-violet-50">
      <div className="my-4">
        <h1 className="text-3xl font-bold py-2">My Projects</h1>
        <p>Manage and track your project progress</p>
      </div>
      <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md">
        {items}
      </div>
      <BtnCreateBoard />
    </div>
  );
}
