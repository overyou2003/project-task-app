import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowBigUpDash } from "lucide-react";
import { ArrowBigDownDash } from "lucide-react";

const CardMainSum = ({ is_owe }: { is_owe: boolean }) => {
  return (
    <Card
      className={`w-full max-w-full card-box-animate bg-gradient-to-r ${
        is_owe ? "from-green-50 to-white" : "from-red-100 to-white"
      }`}
    >
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <h1 className={`${is_owe ? "text-green-600" : "text-red-600"}`}>
              {is_owe ? "เพลงติดเงินดรีม" : "ดรีมติดเงินเพลง"}
            </h1>
            <span
              className={`border rounded-full p-2 ${
                is_owe
                  ? "bg-green-200 text-green-950"
                  : "bg-red-200 text-red-950"
              }`}
            >
              {is_owe ? <ArrowBigUpDash /> : <ArrowBigDownDash />}
            </span>
          </div>
        </CardTitle>
        <CardDescription className="text-3xl">
          <p className={`mt-[-30px] ${is_owe ? "text-green-800" : "text-red-800"}`}>
            100.00 บาท
          </p>
        </CardDescription>
        <CardAction></CardAction>
      </CardHeader>
    </Card>
  );
};
export default CardMainSum;
