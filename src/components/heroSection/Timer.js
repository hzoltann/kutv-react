import React from "react";
import "../../App.css";
import { useState, useEffect } from "react";
import { getRemainingTimeUnitMsTimeStamp } from "./TimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Timer = ({ countDownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countDownTimestampMs]);

  const updateRemainingTime = (countDown) => {
    setRemainingTime(getRemainingTimeUnitMsTimeStamp(countDown));
  };

  return (
    <div className="timer">
      <span>{remainingTime.days}</span>
      <span>Nap</span>
      <span>{remainingTime.hours}</span>
      <span>Óra</span>
      <span>{remainingTime.minutes}</span>
      <span>Perc</span>
      <span>{remainingTime.seconds}</span>
      <span>Másodperc </span>
    </div>
  );
};

export default Timer;
