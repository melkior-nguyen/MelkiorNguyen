import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "../../Global/GlobalContext/GlobalContext";
import { useCallback, useMemo, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedText from "./AnimatedText";
import AnimatedFrontEnd from "./AnimatedFrontEnd";
import AnimatedText2 from "./AnimatedText2/AnimatedText2";
import { useMediaQuery } from "react-responsive";

const AppIntro = () => {
  const { setIsIntroShowed } = useGlobalContext();
  const [intro, setIntro] = useState("intro 1");
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  console.log("current-intro:", intro);

  const introVariant = useMemo(
    () => ({
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
      },
      exit: {
        opacity: 0,
      },
    }),
    []
  );

  const handleNextIntro = useCallback(() => {
    setIntro((prev) => {
      switch (prev) {
        case "intro 1":
          return "intro 2";
        case "intro 2":
          return isMobile ? "intro 4" : "intro 3";
        case "intro 3":
          return "intro 4";
        case "intro 4":
          setIsIntroShowed(true);
          return prev;
        default:
          return prev;
      }
    });
  }, [isMobile, setIsIntroShowed]);

  return (
    <AnimatePresence>
      <motion.section
        className="w-full h-full flex justify-center items-center"
        variants={introVariant}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {intro === "intro 1" && (
          <AnimatedCounter
            from={0}
            to={100}
            onAnimationComplete={handleNextIntro}
          />
        )}
        {intro === "intro 2" && (
          <AnimatedText onAnimationComplete={handleNextIntro} />
        )}
        {intro === "intro 3" && (
          <AnimatedFrontEnd onAnimationComplete={handleNextIntro} />
        )}
        {intro === "intro 4" && (
          <AnimatedText2 onAnimationComplete={handleNextIntro} />
        )}
      </motion.section>
    </AnimatePresence>
  );
};

export default AppIntro;
