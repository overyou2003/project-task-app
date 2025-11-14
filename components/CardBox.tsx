import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardBoxProps {
  icon : React.ReactNode;
  title : string;
  description : string;
  children? : React.ReactNode;
}

const CardBox = ({icon, title, description, children}: CardBoxProps) => {
  return (
      <Card className="w-full max-w-sm m-4 card-box-animate">
        <CardHeader>
          {icon}
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
          <CardAction></CardAction>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
  );
};
export default CardBox;
