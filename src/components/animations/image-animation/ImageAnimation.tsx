import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Interfaces
interface IProps {
  children: JSX.Element;
  delay?: number;
}
function ImageAnimation({ children, delay = 0 }: IProps) {
  // Functions, States and Variables
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  //   UseEffects
  useEffect(() => {
    if (isInView) {
      // console.log(isInView);
      // Trigger the "animate" prop to be visible
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, ease: "easeInOut", delay: delay }}
      //   whileTap={{ scale: 1.1 }}
    >
      {children}
    </motion.div>
  );
}

export default ImageAnimation;
