import { useEffect, useRef } from "react";
import styles from "./Reveal.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
// Interfaces
interface IProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
  hasSlideAnimation?: boolean;
  overflow?: "hidden" | "auto" | "scroll" | "none";
}

function Reveal({
  children,
  width = "fit-content",
  delay = 0,
  hasSlideAnimation = true,
  overflow = "hidden",
}: IProps) {
  // Functions, States and Variables
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  //   UseEffects
  useEffect(() => {
    if (isInView) {
      // Trigger the "animate" prop to be visible
      mainControls.start("visible");
      slideControls.start("visible");
    }
    // else {
    //   console.log(isInView);
    //   mainControls.start("hidden");
    // }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow,
        flexShrink: 0,
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.25 + delay, duration: 0.5 }}
      >
        {children}
      </motion.div>

      {/* Slide Out Overlay */}
      {hasSlideAnimation && (
        <motion.div
          variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={styles.slide_out_overlay_wrapper}
        ></motion.div>
      )}
    </div>
  );
}

export default Reveal;
