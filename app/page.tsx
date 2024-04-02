"use client";
import QuickLinksSheet from "@/components/infomenu";
import MetricInfo from "@/components/metricinfo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const isRunningRef = useRef(false);
  const [counter, setCounter] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1000);

  const callApi = async () => {
    while (isRunningRef.current === true) {
      try {
        const response = await fetch("/api");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setCounter((prevCounter) => prevCounter + 1);
        console.log(counter);
        console.log(speed);
        await new Promise((resolve) => setTimeout(resolve, speed));
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };
  const stopRun = async () => {
    isRunningRef.current = false;
    setIsRunning(false);
    setCounter(1);
  };

  return (
    <div className="grid h-screen">
      <div className=" grid text-center justify-center items-center">
        <div className="space-y-8">
          <h1 className="text-8xl text-white font-bold font-audimat">
            Hello From LaunchDarkly!
          </h1>
          <p className="text-3xl font-audimat ldgradient">
            Welcome to Release Guardian Onboarding
          </p>
          <div className="space-x-2">
            {isRunning ? (
              <Button
                size="lg"
                onClick={() => {
                  stopRun();
                }}
                className="bg-ldred font-audimat"
              >
                <p className="font-audimat text-2xl">Cancel Run</p>
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={async () => {
                  isRunningRef.current = true;
                  setIsRunning(true); // Add this line
                  callApi();
                }}
                className="font-audimat bg-ldsiteblue hover:bg-ldsitehover"
              >
                <p className="font-audimat text-2xl">Begin Run</p>
              </Button>
            )}
            {isRunning === true && (
              <Button
                size="lg"
                onClick={async () => {
                  await stopRun();
                  setSpeed(200);
                  isRunningRef.current = true;
                  setIsRunning(true);
                  callApi();
                }}
                className="bg-ldsiteblue hover:bg-ldsitehover font-audimat"
              >
                <p className="font-audimat text-2xl">Increase Chaos</p>
              </Button>
            )}
          </div>
          <Card className="grid w-1/5 mx-auto p-8 bg-ld-black">
            <p className="font-audimat text-2xl text-white">
              Client API Requests:
            </p>
            <p className="text-7xl text-white">{counter}</p>
          </Card>
          <div className="flex flex-row absolute top-0 left-5">
            <QuickLinksSheet />
            <img src="/ld-white-wide.png" className="pl-4 w-1/5" />
          </div>
          <MetricInfo />
        </div>
      </div>
    </div>
  );
}
