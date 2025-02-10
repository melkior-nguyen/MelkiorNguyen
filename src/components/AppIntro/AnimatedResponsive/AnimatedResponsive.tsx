import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { PiDevicesFill } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/pagination";

interface AnimatedDayTimeProps {
  delay: number;
}
const AnimatedResponsive = ({ delay }: AnimatedDayTimeProps) => {
  const [scope, animate] = useAnimate();
  const [device, setDevice] = useState("mobile");
  const [textIndex, setTextIndex] = useState(0);
  const isTablet = useMediaQuery({ maxWidth: "1200px" });

  const textList1 = ["Responsive", "Mobile", "Tablet", "Desktop"];
  const textList2 = ["Website", "430x932", "1024x1366", "1080x1920"];

  // handle Screen
  const handleScreenAnimate = async () => {
    await animate("#screen", {
      opacity: 0,
      x: "-200px",
    });
    await animate(
      "#screen",
      {
        opacity: 1,
        x: 0,
        width: "30px",
        height: "60px",
        rotate: "360deg",
        borderRadius: "4px",
      },
      {
        onPlay: () => {
          setTextIndex(1);
        },
      }
    );
    await animate(
      "#screen",
      {
        width: "100px",
        height: "80px",
        rotate: "540deg",
        borderRadius: "6px",
      },
      {
        delay: 1,
        type: "spring",
        stiffness: 150,
      }
    );
    await animate(
      "#screen",
      {
        width: "140px",
        height: "90px",
        borderRadius: "8px",
      },
      {
        delay: 1,
        type: "spring",
        stiffness: 300,
      }
    );
  };

  const handleDetailDevice = async () => {
    setTimeout(() => {
      setDevice("tablet");
      setTextIndex(2);
    }, 2000);
    setTimeout(() => {
      setDevice("desktop");
      setTextIndex(3);
    }, 4000);
  };

  const handleAnimation = () => {
    handleScreenAnimate();
    handleDetailDevice();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAnimation();
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      ref={scope}
      className="h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
      }}
    >
      <div className="relative flex-1 flex justify-center items-center pl-8 py-2 gap-3">
        {/* Size */}
        <AnimatePresence mode="wait">
          <motion.span
            key={textIndex}
            initial={{ opacity: 0, x: -40 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 40,
            }}
            transition={{ duration: 0.2 }}
            className={`${
              textIndex === 1 || 0
                ? ""
                : textIndex === 2
                ? "text-xl"
                : "text-2xl"
            } font-bold`}
            style={{
              background: "-webkit-linear-gradient(90deg, #eee, #333)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            {isTablet ? "" : textList1[textIndex]}
          </motion.span>
        </AnimatePresence>
        {/* screen */}
        <motion.div className="border flex bg-appGray relative" id="screen">
          {device === "mobile" && (
            <div className="rounded-full w-1 h-1 absolute left-1/2 bottom-1 bg-black -translate-x-1/2"></div>
          )}
          {device === "tablet" && (
            <>
              <div className="rounded-full w-1 h-10 absolute top-1/2 left-1 bg-appGrayFocus -translate-y-1/2"></div>
              <div className="rounded-full w-[5px] h-[5px] absolute top-1 right-1 bg-appGrayFocus -translate-x-1/2"></div>
            </>
          )}
          {device === "desktop" && (
            <>
              <div className="rounded-full w-36 h-[2px] absolute top-2 left-1/2 bg-[#333] -translate-x-1/2"></div>
              <div className="rounded-full w-[5px] h-[5px] absolute left-1/2 bottom-1 bg-[#333] -translate-x-1/2"></div>
            </>
          )}
        </motion.div>
        {/* Size */}
        <AnimatePresence mode="wait">
          <motion.span
            key={textIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -40,
            }}
            transition={{ duration: 0.2 }}
            className={`${
              textIndex === 1 || 0
                ? ""
                : textIndex === 2
                ? "text-xl"
                : "text-2xl"
            } font-bold`}
            style={{
              background: "-webkit-linear-gradient(90deg, #eee, #333)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            {isTablet ? "" : textList2[textIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="flex justify-between items-center text-appGrayFocus">
        <PiDevicesFill size={16} />
        <span className="text-sm">&#x2022; Responsive Website</span>
      </div>
    </motion.div>
  );
};

export default AnimatedResponsive;
