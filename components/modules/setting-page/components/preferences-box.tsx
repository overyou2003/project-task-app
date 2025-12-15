import { Input } from "@/components/ui/input";
import MyCreatableSelect from "./select-role-input";

const PreferencesBox = () => {
  return (
    <div className="w-full col-span-1 lg:col-span-3 p-6 rounded-lg bg-white shadow-sm">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl">Preferences</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-4">
        <div className="lg:col-span-3">
          <h1 className="text-lg font-semibold col-span-1">Language</h1>
          <p>Select your preferred language</p>
        </div>
        <div>
          <MyCreatableSelect />
        </div>
        <div className="lg:col-span-3">
          <h1 className="text-lg font-semibold col-span-1">Time Zone</h1>
          <p>Set your local time zone</p>
        </div>
        <div>
          <MyCreatableSelect />
        </div>
      </div>
    </div>
  );
};
export default PreferencesBox;
