import { useLayoutEffect } from "react";
import { motion, useAnimate } from "framer-motion";

type AnimatedTextProps = {
  onAnimationComplete: () => void;
};

const textVariant = {
  helloHidden: {
    opacity: 0,
    scale: 0.2,
    x: "-50%",
  },
  imHidden: {
    opacity: 0,
    y: "-100%",
    x: "400%",
  },
};

const AnimatedText = ({ onAnimationComplete }: AnimatedTextProps) => {
  const [scope, animate] = useAnimate();

  useLayoutEffect(() => {
    const handleAnimate = async () => {
      await animate("#Hello", {
        opacity: 1,
        y: "-100%",
        scale: 1,
      });
      animate(
        "#Hello",
        { x: "-100%" },
        { type: "spring", stiffness: 250, mass: 0.6 }
      );
      animate(
        "#Im",
        {
          opacity: 1,
          x: "5px",
        },
        {
          type: "spring",
          stiffness: 300,
          mass: 0.2,
          onComplete: async () => {
            await animate(scope.current, {
              opacity: 0,
              duration: 1,
            });
            onAnimationComplete();
          },
        }
      );
    };
    handleAnimate();
  }, [animate]);

  return (
    <motion.div ref={scope} className="border w-full h-full relative">
      <motion.div
        id="Hello"
        variants={textVariant}
        initial="helloHidden"
        className=" select-none h-max absolute top-1/2 left-1/2 flex justify-center items-end"
      >
        <span className="text-9xl font-extrabold leading-[82px] align-bottom p-0 m-0">
          Hello
        </span>
      </motion.div>
      <motion.div
        id="Im"
        variants={textVariant}
        initial="imHidden"
        className=" select-none h-max absolute top-1/2 left-1/2 flex justify-center items-end"
      >
        <span className="text-4xl font-bold leading-[24px] align-bottom p-0 m-0">
          I'm a
        </span>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedText;
