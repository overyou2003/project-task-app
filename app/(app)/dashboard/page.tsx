import CardProject from "@/components/cardProject";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-2 p-2 pt-0 relative bg-violet-50">
      <div className="m-4 md:m-4">
        <h1 className="text-3xl font-bold py-2">My Projects</h1>
        <p>Manage and track your project progress</p>
      </div>
      <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CardProject
          title="Retospective"
          subtitle="dsadsadd"
          progress={10}
          duedate={10}
        />
        <CardProject
          title="Retospective"
          subtitle="dsadsadd"
          progress={10}
          duedate={10}
        />
        <CardProject
          title="Retospective"
          subtitle="dsadsadd"
          progress={10}
          duedate={10}
        />
        <CardProject
          title="Retospective"
          subtitle="dsadsadd"
          progress={10}
          duedate={10}
        />
      </div>
    </div>
  );
}
