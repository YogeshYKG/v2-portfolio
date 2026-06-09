"use client";

import React, { useState } from "react";

const StopWatch = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startStopWatch = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const pauseStopWatch = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      startStopWatch();
    }
  };

  const xyz = () => {
    const var1 = 10;
    const var2 = 20;

    const innerFunc = () => {
      return var1 + var2;
    };

    return var1
  };

  const stopStopWatch = () => {
    clearInterval(intervalId);
    setCurrentTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <div className="">Stop Watch</div>
      <div className="">{`Time : ${formatTime(currentTime)}`}</div>
      <div className="">
        <button className="" onClick={startStopWatch}>
          Start
        </button>
      </div>
      <div className="">
        <button className="" onClick={pauseStopWatch}>
          {isRunning ? "Pause" : "Resume"}
        </button>
      </div>
      <div className="">
        <button className="" onClick={stopStopWatch}>
          Stop
        </button>
      </div>
    </>
  );
};

export default StopWatch;
