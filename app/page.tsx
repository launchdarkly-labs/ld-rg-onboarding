"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const isRunningRef = useRef(false);
  const [counter, setCounter] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1000);

  const callApi = async () => {
    while (isRunningRef.current === true) {
      try {
        const data = await fetch("/api");
        console.log(data.json());
        setCounter((prevCounter) => prevCounter + 1);
        console.log(counter);
        console.log(speed);
        await new Promise((resolve) => setTimeout(resolve, speed));
      } catch {
        console.log("error");
      }
    }
  };

  return (
    <div className="grid h-screen">
      <div className=" grid text-center justify-center items-center">
        <div className="space-y-8">
          <h1 className="text-8xl text-white font-bold font-audimat">
            Hello From LaunchDarkly!
          </h1>
          <p className="text-3xl font-audimat">
            Welcome to Release Guardian Onboarding
          </p>
          <div className="space-x-2">
          {isRunning ? (
            <button
              onClick={() => {
                isRunningRef.current = false;
                setIsRunning(false); // Add this line
                setCounter(1);
              }}
              className="bg-green-800 font-audimat py-2 px-4 rounded-md"
            >
              Cancel Chaos
            </button>
          ) : (
            <button
              onClick={async () => {
                isRunningRef.current = true;
                setIsRunning(true); // Add this line
                callApi();
              }}
              className="bg-blue-800 font-audimat py-2 px-4 rounded-md"
            >
              <p className="font-audimat">Begin Run</p>
            </button>
          )}
          {isRunning === true && (
            <button
              onClick={() => {
                setSpeed(200);
                callApi();
              }}
              className="bg-red-800 font-audimat py-2 px-4 rounded-md"
            >
              Introduce Chaos
            </button>
          )}
          </div>
          <p className="font-audimat text-xl">Current Run Count: {counter}</p>
        </div>
      </div>
    </div>
  );
}
