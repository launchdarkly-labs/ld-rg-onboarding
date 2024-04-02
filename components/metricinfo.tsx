import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const MetricInfo = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button size={"lg"} variant="outline" className="dark text-xl">
          Metric Info
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className="dark">
        <SheetHeader>
          <SheetTitle>Metric Info</SheetTitle>
          <SheetDescription>
            Details of LaunchDarkly metrics used within this application
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-8 mt-4">
          <Card className=" text-white font-audimat">
            <CardHeader>
              <CardTitle>Error Rate</CardTitle>
              <CardDescription>
                The amount of errors occurring in a feature release
              </CardDescription>
            </CardHeader>
            <CardContent >
              <p><span className="font-bold">Sucess Criteria:</span> Lower Than Baseline</p>
              <p><span className="font-bold">Randomization Unit:</span> User</p>
              <p><span className="font-bold">Measurement Type:</span> Numeric</p>
            </CardContent>
          </Card>
          <Card className=" text-white font-audimat">
            <CardHeader>
              <CardTitle>Latency</CardTitle>
              <CardDescription>
                Amount of time from start of request to request completing against the `planetApi`
              </CardDescription>
            </CardHeader>
            <CardContent >
              <p><span className="font-bold">Sucess Criteria:</span> Lower Than Baseline</p>
              <p><span className="font-bold">Randomization Unit:</span> User</p>
              <p><span className="font-bold">Measurement Type:</span> ms, Numeric</p>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MetricInfo;
