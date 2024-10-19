import {
  KeyframeOptions,
  motion,
  useAnimate,
} from "framer-motion";
import React, { useLayoutEffect } from "react";

type NumberCounterProps = {
  from: number;
  to: number;
  animatedOptions?: KeyframeOptions;
  onAnimationComplete: () => void;
};

const NumberCounter = ({
  from,
  to,
  animatedOptions,
  onAnimationComplete,
}: NumberCounterProps) => {
  const [scope, animate] = useAnimate()

  useLayoutEffect(() => {
    scope.current.textContent = `${from}%`
    const animation = animate(from, to, {
      duration: 1,
      ease: "easeInOut",
      ...animatedOptions,
      onUpdate: (value) => {
        scope.current.textContent = `${value.toFixed()}%`;
      },
      onComplete: () => {
        onAnimationComplete();
      },
    });

    return () => {
      animation.stop();
    };
  }, [scope]);

  return (
    <motion.p
      ref={scope}
      className="text-4xl font-bold text-appGray"
      style={{ textShadow: "1px 1px 0 var(--black)" }}
    />
  );
};

export default NumberCounter;
