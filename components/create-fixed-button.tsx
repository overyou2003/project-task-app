import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const CreateFixBtn = () => {
  return (
    <div className="relative">
      <div className="absulute">
        <Button variant="outline" size="icon">
          <CirclePlus />
        </Button>
      </div>
    </div>
  );
};
export default CreateFixBtn;
