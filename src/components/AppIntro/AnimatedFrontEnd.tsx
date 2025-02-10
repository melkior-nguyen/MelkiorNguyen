import { motion, useAnimate } from "framer-motion";
import AnimatedChart from "./AnimatedChart/AnimatedChart";
import AnimatedDayTime from "./AnimatedDayTime/AnimatedDayTime";
import AnimatedForm from "./AnimatedForm/AnimatedForm";
import AnimatedOtp from "./AnimatedOtp/AnimatedOtp";
import AnimatedResponsive from "./AnimatedResponsive/AnimatedResponsive";
import AnimatedToggle from "./AnimatedToggle/AnimatedToggle";
import { useCallback, useMemo } from "react";

type AnimatedFrontEndProps = {
  onAnimationComplete: () => void;
};

const AnimatedFrontEnd = ({ onAnimationComplete }: AnimatedFrontEndProps) => {
  const [scope, animate] = useAnimate();

  const featureVariant = {
    hidden: {
      opacity: 0,
      scale: 1.2,
      y: "10%",
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  const featureList = useMemo(
    () => [
      {
        feature: <AnimatedChart delay={1} />,
      },
      {
        feature: <AnimatedDayTime delay={1.15} />,
      },
      {
        feature: <AnimatedForm delay={1.3} />,
      },
      {
        feature: <AnimatedResponsive delay={1.45} />,
      },
      {
        feature: <AnimatedToggle delay={1.6} />,
      },
      {
        feature: <AnimatedOtp delay={1.75} />,
      },
    ],
    []
  );

  const handleAnimationComplete = useCallback(() => {
    onAnimationComplete();
  }, [onAnimationComplete]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        ref={scope}
        className="w-full max-w-[1200px] grid grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {featureList.map((item, i) => {
          return (
            <motion.div
              key={i}
              variants={featureVariant}
              initial="hidden"
              animate="show"
              transition={{
                delay: i / 8,
              }}
              onAnimationComplete={() => {
                if (i === featureList.length - 1) {
                  setTimeout(async () => {
                    await animate(scope.current, { opacity: 0, duration: 2 });
                    handleAnimationComplete();
                  }, 3000);
                }
              }}
              className="border border-appGray aspect-video rounded-xl p-4"
            >
              {item.feature}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AnimatedFrontEnd;
