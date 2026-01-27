import BtnCreateBoard from "@/components/btn-create-board";
import { LightRays } from "@/components/ui/light-rays";
import BtnNewProject from "../components/btn-new-project";
import CardProject from "@/components/cardProject";
import { Project, ProjectCard } from "../components/card-project";
const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Website Redesign",
    description:
      "Overhaul of the main marketing website with new branding guidelines and improved accessibility standards.",
    status: "active",
    progress: 75,
    taskCount: 24,
    dueDate: "Oct 24",
    teamSize: 5,
    color: "bg-indigo-500",
  },
  {
    id: "2",
    title: "Mobile App Launch",
    description:
      "Preparation for the Q4 iOS and Android release, including final QA testing and store asset creation.",
    status: "active",
    progress: 45,
    taskCount: 18,
    dueDate: "Nov 12",
    teamSize: 8,
    color: "bg-blue-500",
  },
  {
    id: "3",
    title: "Q3 Financial Report",
    description:
      "Consolidating departmental budgets and preparing the quarterly presentation for the board meeting.",
    status: "completed",
    progress: 100,
    taskCount: 12,
    dueDate: "Sep 30",
    teamSize: 3,
    color: "bg-emerald-500",
  },
  {
    id: "4",
    title: "Customer Portal",
    description:
      "Developing a self-service portal for customers to manage their subscriptions and view usage analytics.",
    status: "on-hold",
    progress: 30,
    taskCount: 45,
    dueDate: "TBD",
    teamSize: 4,
    color: "bg-amber-500",
  },
  {
    id: "5",
    title: "Internal Tools Migration",
    description:
      "Migrating legacy internal dashboards to the new React-based infrastructure for better performance.",
    status: "active",
    progress: 15,
    taskCount: 32,
    dueDate: "Dec 15",
    teamSize: 6,
    color: "bg-violet-500",
  },
  {
    id: "6",
    title: "Brand Guidelines 2.0",
    description:
      "Updating the company design system and brand voice documentation for the marketing team.",
    status: "completed",
    progress: 100,
    taskCount: 8,
    dueDate: "Oct 01",
    teamSize: 2,
    color: "bg-rose-500",
  },
];
const HomeProjectPageView = () => {
  return (
    <div className="">
      <div className="relative h-[200px] w-full overflow-hidden rounded-lg border">
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
          <span className="text-xs font-semibold tracking-[0.35em] text-slate-800/60 uppercase dark:text-slate-200/60">
            Welcome to !
          </span>
          <h1 className="text-foreground text-4xl font-bold md:text-5xl">
            TASKFLOW
          </h1>
          <p className="max-w-md text-sm text-slate-800/80 md:text-base dark:text-slate-200/80">
            You can create your card for manage your project of to do list in
            your life
          </p>
        </div>
        <LightRays speed={25} blur={40} />
      </div>
      <div>
        <div className="pt-7 flex justify-between items-center font-semibold">
          <h1 className="text-2xl">Projects</h1>
          <BtnNewProject />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
          {MOCK_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(id) => console.log("Clicked project:", id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomeProjectPageView;
