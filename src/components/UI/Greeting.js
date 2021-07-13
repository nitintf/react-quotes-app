import React, { memo } from "react";
import { motion } from "framer-motion";

import "./Greeting.scss";

const hVar = {
  hidden: {
    y: 50,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const dVar = {
  hidden: {
    y: -50,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const Greeting = () => {
  const currentDate = new Date().toLocaleDateString("En-en", {
    weekday: "long",
    year: "numeric",

    day: "numeric",
  });

  return (
    <div className="greeting">
      <motion.h3
        className="greeting__heading"
        variants={hVar}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        Hey, there!
      </motion.h3>
      <motion.div
        className="greeting__date"
        variants={dVar}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {currentDate}
      </motion.div>
    </div>
  );
};

export default memo(Greeting);
