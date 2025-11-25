import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CreateFixBtn from "./btn-create-board";

const CreateCardProject = () => {
    return (
    <Card className="w-full max-w-sm m-4 card-box-animate">
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription><CreateFixBtn/></CardDescription>
        <CardAction></CardAction>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  );
}
export default CreateCardProject