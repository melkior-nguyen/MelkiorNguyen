import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "../../Global/GlobalContext/GlobalContext";
import { useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedText from "./AnimatedText";

const introVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const AppIntro = () => {
  const { setIsIntroShowed } = useGlobalContext();
  const [intro, setIntro] = useState("intro 1");

  const handleAnimationComplete = () => {
    setIsIntroShowed(true);
  };
  return (
    <motion.section
      className="w-full h-full flex justify-center items-center"
      variants={introVariant}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {intro === "intro 1" && (
          <AnimatedCounter
            from={0}
            to={100}
            onAnimationComplete={() => setIntro("intro 2")}
          />
        )}
        {intro === "intro 2" && <AnimatedText onAnimationComplete={()=> setIntro("intro 3")}/>}
        {intro === "intro 3" && (
          <AnimatedCounter
          from={0}
          to={100}
          onAnimationComplete={() => handleAnimationComplete()}
        />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default AppIntro;
