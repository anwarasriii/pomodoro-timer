import { useEffect, useState } from "react";

const WORK_TIME = 1500;
const BREAK_TIME = 300;

export const usePomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");

  // START
  const start = () => setIsRunning(true);

  // PAUSE
  const pause = () => setIsRunning(false);

  // RESET
  const reset = () => {
    setIsRunning(false);
    setMode("work");
    setTimeLeft(WORK_TIME);
  };

  // TIMER LOGIC
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const nextMode = mode === "work" ? "break" : "work";

          setMode(nextMode);

          return nextMode === "work" ? WORK_TIME : BREAK_TIME;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, mode]);

  return {
    timeLeft,
    isRunning,
    mode,
    start,
    pause,
    reset,
  };
};