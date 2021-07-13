import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./PageHeading.scss";

const headingVariant = {
  hidden: {
    y: -100,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.8,
    },
  },
  exit: {
    y: 100,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PageHeading = (props) => {
  const words = props.text.split(" ");

  return (
    <div className="heading">
      {words.map((word) => {
        return (
          <div className="heading__text" key={word}>
            <motion.h1
              className="heading__text--word"
              variants={headingVariant}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {word}
            </motion.h1>
          </div>
        );
      })}
    </div>
  );
};

export default PageHeading;
