import BottomTask from "./ui/bottom-task";

const TaskCard = () => {
  return (
    <div className="w-full col-span-1 lg:col-span-3 p-3 rounded-lg bg-white shadow-sm cursor-grab hover:shadow-md transition-all duration-100">
      <div>
        <h1>TaskName</h1>
      </div>
      <div>
        <BottomTask/>
      </div>
    </div>
  );
};
export default TaskCard;
