import { Input } from "@/components/ui/input";
import MyCreatableSelect from "./select-role-input";

const ProfileInformation = () => {
  return (
    <div className="w-full col-span-1 lg:col-span-3 p-6 rounded-lg bg-white shadow-sm">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl">Profile Information</h1>
        <a href="#" className="text-blue-700">
          Edit
        </a>
      </div>
      {/* <div>
            <Avatar className="h-8 w-8 rounded-xl">
              <AvatarImage
                src={data.user.avatar}
                alt={data.user.name}
                className="object-cover"
              />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
          </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
        <label htmlFor="text">
          Full Name
          <Input type="text" value="Dreams" />
        </label>
        <label htmlFor="email">
          Email Address
          <Input type="email" value="dreams.patiphat@gmail.com" />
        </label>
        <label htmlFor="">
          Phone Number
          <Input type="number" value="0971160106" />
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
