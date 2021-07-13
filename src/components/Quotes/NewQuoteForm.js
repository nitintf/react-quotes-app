import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Prompt } from "react-router-dom";

import "./NewQuoteForm.scss";
import Button from "../UI/Button";

const formVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

const NewQuoteForm = (props) => {
  const authorRef = useRef();
  const textRef = useRef();

  const formSubmitHandler = (e) => {
    const enteredAuthor = authorRef.current.value;
    const enteredText = textRef.current.value;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  return (
    <motion.form
      onSubmit={formSubmitHandler}
      className="form"
      variants={formVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="form__input">
        <input
          ref={authorRef}
          className="form__input--field"
          placeholder="Author Name"
        />
      </div>
      <div className="form__input">
        <textarea
          ref={textRef}
          className="form__input--field"
          placeholder="Quote"
          rows="5"
        />
      </div>
      <Button text="Add Quote" path="/quotes" onClick={formSubmitHandler} />
    </motion.form>
  );
};

export default NewQuoteForm;
