import React from "react";
import { motion } from "framer-motion";

import "./QuoteItem.scss";

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

const QuoteItem = (props) => {
  return (
    <motion.div
      className="quotes-item"
      variants={itemVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="quotes-detail">
        <h3>{props.text}</h3>
      </div>
    </motion.div>
  );
};

export default QuoteItem;
