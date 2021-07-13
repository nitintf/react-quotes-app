import React, { useEffect, useRef } from "react";
import Button from "../UI/Button";
import { motion } from "framer-motion";

import "./QuoteItem.scss";

const QuoteItem = (props) => {
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
        <p>{props.author}</p>
      </div>
      <Button text="Read More" path={`/quotes/${props.id}`} />
    </motion.div>
  );
};

export default QuoteItem;
