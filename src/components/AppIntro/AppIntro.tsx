import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "../../Global/GlobalContext/GlobalContext";
import { useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedText from "./AnimatedText";
import AnimatedFrontEnd from "./AnimatedFrontEnd";

const introVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const AppIntro = () => {
  const { setIsIntroShowed } = useGlobalContext();
  const [intro, setIntro] = useState("intro 1");

  const handleAnimationComplete = () => {
    setIsIntroShowed(true);
  };
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
            onAnimationComplete={() => setIntro("intro 2")}
          />
        )}
        {intro === "intro 2" && (
          <AnimatedText onAnimationComplete={() => setIntro("intro 3")} />
        )}
        {intro === "intro 3" && (
          <AnimatedFrontEnd onAnimationComplete={handleAnimationComplete} />
        )}
      </motion.section>
    </AnimatePresence>
  );
};

export default AppIntro;
