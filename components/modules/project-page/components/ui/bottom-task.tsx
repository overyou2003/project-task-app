import { BsCalendarDateFill } from "react-icons/bs";


const BottomTask = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-red-300 w-fit px-1.5 rounded-sm text-sm my-1">
        Design
      </div>
      <div className="text-sm flex items-center gap-1.5 text-red-400">
        <BsCalendarDateFill/>
        Dec 15
      </div>
    </div>
  );
};
export default BottomTask;
