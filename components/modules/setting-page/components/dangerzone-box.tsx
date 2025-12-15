import { HiOutlineLogout } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

const DangerZoneBox = () => {
  return (
    <div className="w-full col-span-1 p-6 rounded-lg bg-white shadow-sm border border-red-300 text-red-500 row-span-1">
      <div className="h-full">
        <div>
          <h1 className="font-semibold text-xl">Danger Zone</h1>
        </div>
        <div className="flex items-center gap-3 mt-4 cursor-pointer border border-red-300 p-4 rounded-md hover:bg-red-500/10">
          <MdDelete size={25} />
          <div>
            <h1 className="font-semibold">Delete Account</h1>
            <p>Permanently delete account</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DangerZoneBox;
