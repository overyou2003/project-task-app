import { Input } from "@/components/ui/input";
import MyCreatableSelect from "./select-role-input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { FaCamera } from "react-icons/fa6";

const ProfileInformation = () => {
  const data = {
    user: {
      name: "Dreams",
      role: "Intern",
      userCreateAt: "Member since March 2023",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };
  return (
    <div className="w-full col-span-1 lg:col-span-2 p-6 rounded-lg bg-white shadow-sm row-span-2">
      <div className="flex justify-between mb-3">
        <h1 className="font-semibold text-xl">Profile Information</h1>
        <a href="#" className="text-blue-700">
          Edit
        </a>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <Avatar>
            <AvatarImage
              src={data.user.avatar}
              alt={data.user.name}
              className="object-cover h-20 w-20 rounded-full"
            />
            <span className="absolute right-0 bottom-0 bg-blue-600 p-1.5 rounded-full">
              <FaCamera size={12} className="text-white" />
            </span>
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="mx-5">
          <h1 className="font-semibold">{data.user.name}</h1>
          <p className="text-gray-600">{data.user.role}</p>
          <p className="text-gray-500">{data.user.userCreateAt}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-4">
        <label htmlFor="text" className="">
          Full Name
          <Input type="text" value="Dreams" className="mt-2" />
        </label>
        <label htmlFor="email">
          Email Address
          <Input
            type="email"
            value="dreams.patiphat@gmail.com"
            className="mt-2"
          />
        </label>
        <label htmlFor="">
          Phone Number
          <Input type="number" value="0971160106" className="mt-2" />
        </label>
        <label htmlFor="">
          Role
          <MyCreatableSelect />
        </label>
      </div>
    </div>
  );
};
export default ProfileInformation;
