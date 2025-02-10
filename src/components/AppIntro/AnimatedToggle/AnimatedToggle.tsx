import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { FaSun } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
interface AnimatedDayTimeProps {
  delay: number;
}
const AnimatedToggle = ({ delay }: AnimatedDayTimeProps) => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const isTablet = useMediaQuery({ maxWidth: "1200px" });

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleToggle();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
      }}
    >
      <motion.div className="flex-1 px-3 py-2">
        <motion.div
          className={`flex ${
            isTablet ? "justify-center" : "justify-between"
          } items-center h-full rounded-xl gap-1 px-5`}
          initial={{
            background: isDark
              ? "linear-gradient(to right, #333, #000)"
              : "linear-gradient(to right, #9fa2a8, #D4D6D8)",
          }}
          animate={{
            background: isDark
              ? "linear-gradient(to right, #333, #000)"
              : "linear-gradient(to right, #9fa2a8, #D4D6D8)",
          }}
        >
          {/* Typography */}
          {!isTablet && (
            <div
              className="flex flex-col"
              style={{ color: isDark ? "#fff" : "#000", flex: "2" }}
            >
              <div
                className="text-xl font-bold underline mb-2"
                style={{
                  background: "-webkit-linear-gradient(0deg, #333, #eee)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Typography:
              </div>
              <span
                className="text-2xl font-bold"
                style={{
                  background:
                    "-webkit-linear-gradient(0deg, #595959 25%, #000)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Dream big, act bigger
              </span>
              <span
                className="text-xl font-semibold"
                style={{
                  background:
                    "-webkit-linear-gradient(0deg, #595959 25%, #000)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Dream big, act bigger
              </span>
              <span
                className="text-lg font-light mb-1"
                style={{
                  background:
                    "-webkit-linear-gradient(0deg, #595959 25%, #000)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Dream big, act bigger
              </span>
              <span
                className="text-md font-extralight mb-1"
                style={{
                  background:
                    "-webkit-linear-gradient(0deg, #595959 25%, #000)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Dream big, act bigger
              </span>
              <span
                className="text-sm font-thin"
                style={{
                  background:
                    "-webkit-linear-gradient(0deg, #595959 25%, #000)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Dream big, act bigger
              </span>
            </div>
          )}
          {/* button */}
          <motion.div
            className="w-[80px] h-[40px] rounded-full border relative cursor-pointer"
            style={{ boxShadow: "1px 1px 4px 0 #acacac" }}
            initial={{
              background: isDark
                ? "linear-gradient(135deg,#333, #000)"
                : "linear-gradient(135deg,#000, #333)",
            }}
            animate={{
              background: isDark
                ? "linear-gradient(135deg,#333, #000)"
                : "linear-gradient(135deg,#000, #333)",
            }}
            onClick={handleToggle}
          >
            <motion.div
              className="border absolute aspect-square rounded-full w-[32px] flex justify-center items-center top-1/2 left-[4px] overflow-hidden"
              style={{
                background: isDark
                  ? "linear-gradient(135deg,#000, #333)"
                  : "linear-gradient(135deg,#333, #000)",
              }}
              initial={{
                x: "0",
                y: "-50%",
              }}
              animate={{
                x: isDark ? "38px" : "2px",
                y: "-50%",
              }}
              transition={{
                duration: 0.2,
                type: "spring",
                damping: 12,
              }}
            >
              <motion.div
                className="flex flex-col absolute top-0 left-0"
                initial={{
                  y: 0,
                }}
                animate={{
                  y: isDark ? "-50%" : "0",
                }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  damping: 12,
                }}
              >
                <div className="w-[30px] aspect-square flex justify-center items-center">
                  <FaSun size={16} />
                </div>
                <div className="w-[30px] aspect-square flex justify-center items-center">
                  <BsFillMoonStarsFill size={16} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="flex justify-between items-center text-appGrayFocus">
        <CgDarkMode size={16} />
        <span className="text-sm">&#x2022; Dark Mode Website </span>
      </div>
    </motion.div>
  );
};

export default AnimatedToggle;
