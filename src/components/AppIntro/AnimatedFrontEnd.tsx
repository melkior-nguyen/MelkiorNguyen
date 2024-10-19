import { motion, useAnimate } from "framer-motion";
import AnimatedChart from "./FrontEndFeatures/AnimatedChart";
import AnimatedDayTime from "./FrontEndFeatures/AnimatedDayTime";
import AnimatedForm from "./FrontEndFeatures/AnimatedForm";
import AnimatedOtp from "./FrontEndFeatures/AnimatedOtp";
import AnimatedResponsive from "./FrontEndFeatures/AnimatedResponsive";
import AnimatedToggle from "./FrontEndFeatures/AnimatedToggle";

type AnimatedFrontEndProps = {
  onAnimationComplete: () => void;
};

const featureList = [
  {
    feature: <AnimatedChart />,
  },
  {
    feature: <AnimatedDayTime />,
  },
  {
    feature: <AnimatedForm />,
  },
  {
    feature: <AnimatedOtp />,
  },
  {
    feature: <AnimatedResponsive />,
  },
  {
    feature: <AnimatedToggle />,
  },
];

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

const AnimatedFrontEnd = ({ onAnimationComplete }: AnimatedFrontEndProps) => {
  const [scope, animate] = useAnimate();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        ref={scope}
        className="w-full max-w-[1200px] grid grid-cols-3 gap-6"
      >
        {featureList.map((item, i) => {
          return (
            <motion.div
              key={i}
              variants={featureVariant}
              initial="hidden"
              animate="show"
              transition={{
                delay: i / 10,
              }}
              onAnimationComplete={async () => {
                if (i > featureList.length - 1) {
                  await animate(scope.current, { opacity: 0 });
                  onAnimationComplete();
                }
              }}
              className="border aspect-video flex flex-col justify-between gap-4 rounded-xl p-4"
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
