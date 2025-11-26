import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarUser from "./avatar-user";

interface CardBoxProps {
  title: string;
  subtitle: string;
  progress: number;
  duedate?: number;
  children?: React.ReactNode;
}

const CardProject = ({
  title,
  subtitle,
  progress,
  duedate,
  children,
}: CardBoxProps) => {
  return (
    <Card className="w-full max-w-sm md:max-w-lg lg:max-w-full card-box-animate">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
        <CardAction></CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row flex-wrap items-center gap-12 justify-between">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <AvatarUser/>
            <AvatarUser/>
            <AvatarUser/>
          </div>
          <div className="text-sm text-gray-500">23/11/68</div>
        </div>
      </CardContent>
    </Card>
  );
};
export default CardProject;
