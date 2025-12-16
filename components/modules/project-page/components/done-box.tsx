import { FaPlus } from "react-icons/fa";

const DoneBox = () => {
  return (
    <div className="w-full col-span-1 p-3 rounded-lg bg-white shadow-sm">
      <div className="flex justify-between">
        <h1 className="font-semibold">Done</h1>
        <span className="">0</span>
      </div>
      <div
        className="flex items-center gap-2 justify-center border-3 border-dotted 
          rounded-lg p-2 text-gray-500 hover:text-gray-800 hover:border-gray-400 
          cursor-pointer transition duration-200 my-5"
      >
        <span>
          <FaPlus />
        </span>
        <p>Add Card</p>
      </div>
    </div>
  );
};
export default DoneBox;
