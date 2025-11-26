import { GoPlus } from "react-icons/go";
import { Button } from "@/components/ui/button";

const BtnCreateBoard = () => {
  return (
      <span className="bg-linear-to-r from-purple-600 to-violet-500 
      w-fit rounded-full p-3 fixed right-10 bottom-10 transition-all duration-200 hover:scale-110 cursor-pointer">
          <GoPlus size={30} className="text-white"/>
      </span>
  );
};
export default BtnCreateBoard;
