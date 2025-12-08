import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "@/components/ui/input"
const SettingPageView = () => {
  const data = {
    user: {
      name: "Dreams",
      role: "Intern",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };

  return (
    <div className="flex flex-1 flex-col gap-2 p-6 lg:p-6 relative bg-gray-100">
      <h1 className="text-3xl font-bold">Account Settings</h1>
      <p>Manage your profile information and preferences</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="w-full col-span-1 lg:col-span-2 p-3 rounded-lg bg-white shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-semibold">Profile Information</h1>
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
          <div className="">
            <label htmlFor="text">Full Name</label>
            <Input type="text" value="Dreams"/>
            <label htmlFor="email">Email Address</label>
            <Input type="email" value="dreams.patiphat@gmail.com"/>
            <label htmlFor="">Phone Number</label>
            <Input type="number" value="0971160106"/>
            <label htmlFor="">Role</label>
            <Input type="email" value="dreams.patiphat@gmail.com"/>
          </div>
        </div>
        <div className="bg-red-500 w-full">ddsa</div>
        <div className="bg-red-500 w-full">ddsa</div>
      </div>
    </div>
  );
};
export default SettingPageView;
