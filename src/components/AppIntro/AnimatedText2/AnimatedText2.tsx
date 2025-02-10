import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./style.css";
import Melkior from "../../../SVGs/Melkior.tsx";

type AnimatedTextProps = {
  onAnimationComplete: () => void;
};

const texts = "Front-End Developer";

const AnimatedText2 = ({ onAnimationComplete }: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <motion.div ref={ref} className="flex font-extrabold text-5xl md:text-9xl ">
        {texts.split("").map((char: string, index: number) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -16 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.2,
              delay: index / 25,
            }}
            exit={{
              opacity: 0,
            }}
            onAnimationComplete={() => {
              if (index === 8) {
                setTimeout(async () => {
                  onAnimationComplete();
                }, 1000);
              }
            }}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </motion.div>
      <div className="h-20">
        <Melkior />
      </div>
    </div>
  );
};

export default AnimatedText2;
