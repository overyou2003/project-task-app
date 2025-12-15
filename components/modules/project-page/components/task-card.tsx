import BottomTask from "./ui/bottom-task";

const TaskCard = () => {
  return (
    <div className="w-full col-span-1 lg:col-span-3 p-3 rounded-lg bg-white shadow-md">
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
