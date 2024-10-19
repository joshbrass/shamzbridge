import React, { useRef } from "react";
import { Variant, useInView } from "framer-motion";
import { motion } from "framer-motion";

// Interfaces
interface IContainerRevealProps {
  children: React.ReactNode;
  el?: keyof JSX.IntrinsicElements;
  once?: boolean;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
  delay?: number;
}

function ContainerReveal({
  children,
  el: Wrapper = "div",
  once = true,
  delay = 0,
  animation,
}: IContainerRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0, once });
  //  Default animations for the container reveal
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay,
      },
    },
  };

  return (
    <Wrapper>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animation || defaultAnimations}
        className="inline-block w-full"
      >
        {children}
      </motion.span>
    </Wrapper>
  );
}

export default ContainerReveal;
