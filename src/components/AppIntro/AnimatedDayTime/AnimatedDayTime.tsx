import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuCalendarClock } from "react-icons/lu";

interface AnimatedDayTimeProps {
  delay: number;
}

const AnimatedDayTime = ({ delay }: AnimatedDayTimeProps) => {
  const [currentTime, setCurrentTime] = useState({
    day: formatTime("day"),
    time: formatTime("time"),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime({
        day: formatTime("day"),
        time: formatTime("time"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function formatTime(select: "day" | "time") {
    const options: Record<"day" | "time", Intl.DateTimeFormatOptions> = {
      day: {
        weekday: "short",
        month: "short",
        day: "2-digit",
      },
      time: {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      },
    };
    return new Date().toLocaleString("en-US", options[select]);
  }

  return (
    <motion.div
      className="h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <span
          className="text-5xl xl:text-6xl font-extrabold w-[90%]"
          style={{
            background: "-webkit-linear-gradient(-90deg, #eee, #333)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          {currentTime.day}
        </span>
        <span
          className="text-4xl xl:text-5xl font-extrabold w-[90%]"
          style={{
            background: "-webkit-linear-gradient(90deg, #eee, #333)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          {currentTime.time}
        </span>
      </div>
      <div className="flex justify-between items-center text-appGrayFocus">
        <LuCalendarClock size={16} />
        <span className="text-sm">&#x2022; Real-Time Clock</span>
      </div>
    </motion.div>
  );
};

export default AnimatedDayTime;
