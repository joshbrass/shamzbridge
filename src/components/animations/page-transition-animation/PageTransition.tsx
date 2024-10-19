import React from "react";
import styles from "./PageTransition.module.css";
import { motion } from "framer-motion";
import companyLogoWrapper from "../../../assets/images/others/resq-logo-secondary.png";

function PageTransition(OriginalComponent: React.FC) {
  return () => (
    <>
      <OriginalComponent />
      {/* Slide In */}
      <motion.div
        className={styles.slide_in}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.company_logo_wrapper}>
          <img src={companyLogoWrapper} alt="" />
        </div>
      </motion.div>
      {/* Slide Out */}
      <motion.div
        className={styles.slide_out}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
}

export default PageTransition;
