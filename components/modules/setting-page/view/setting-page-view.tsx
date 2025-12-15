import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "@/components/ui/input";
import MyCreatableSelect from "@/components/modules/setting-page/components/select-role-input";
import ProfileInformation from "../components/profile-information-box";
import DangerZoneBox from "../components/dangerzone-box";
import SaveBox from "../components/save-box";
import PreferencesBox from "../components/preferences-box";
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
    <div className="flex flex-1 flex-col gap-2 p-6 lg:px-30 relative bg-gray-100">
      <div className="mb-5">
        <h1 className="text-3xl font-bold">Account Settings</h1>
        <p>Manage your profile information and preferences</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-flow-col gap-5 lg:grid-rows-2">
        <ProfileInformation />
        <DangerZoneBox />
        <SaveBox />
      </div>
    </div>
  );
};
export default SettingPageView;
