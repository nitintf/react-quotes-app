import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Button.scss";

const btnVariant = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 1,
      ease: "easeInOut",
    },
  },
};

const Button = (props) => {
  return (
    <div className="btn__container">
      <motion.div
        variants={btnVariant}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {props.typeBtn ? (
          <button className="btn__container--white" onClick={props.onClick}>
            {props.text}
          </button>
        ) : (
          <Link
            to={props.path}
            className="btn__container--white"
            onClick={props.onClick}
          >
            {props.text}
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default Button;
