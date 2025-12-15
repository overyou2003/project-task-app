import DoneBox from "../components/done-box";
import InprogressBox from "../components/inprogress-box";
import TodoBox from "../components/todo-box";

const ProjectPageView = () => {
  return (
    <div className="px-8 w-full h-full">
      <h1 className="font-semibold text-2xl my-5">ProjectName</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <TodoBox/>
        <InprogressBox/>
        <DoneBox/>
      </div>
    </div>
  );
};
export default ProjectPageView;
