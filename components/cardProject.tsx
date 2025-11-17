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
  title : string;
  subtitle : string;
  progress : number;
  duedate : Date;
  children? : React.ReactNode;
}

const CardBox = ({title, subtitle, progress , duedate , children}: CardBoxProps) => {
  return (
      <Card className="w-full max-w-sm m-4 card-box-animate">
        <CardHeader>
          
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            
          </CardDescription>
          <CardAction></CardAction>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
  );
};
export default CardBox;
