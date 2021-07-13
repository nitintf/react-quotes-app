import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import "./Comment.scss";
import useHttp from "../../hooks/use-http";
import { postComment } from "../../lib/api";

const CommentForm = (props) => {
  const [commentInput, setCommentInput] = useState();
  const { sendRequest, status, error } = useHttp(postComment);
  const { onAddingComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddingComment();
    }
  }, [status, error, onAddingComment]);

  const inputChangeHandler = (e) => {
    setCommentInput(e.target.value);
  };

  const commentSubmitHandler = (e) => {
    e.preventDefault();

    //   Validate

    //   Send Data to sever
    sendRequest({
      commentData: { text: commentInput },
      quoteId: props.quoteId,
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="comment__form"
      onSubmit={commentSubmitHandler}
    >
      <input
        type="text"
        onChange={inputChangeHandler}
        placeholder="Add Comment"
        className="comment__form--input"
      />
      <svg
        className="enter-icon"
        id="Capa_1"
        height="14"
        onClick={commentSubmitHandler}
        viewBox="0 0 280.823 280.823"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m250.734 40.137-90.265-.02v20.059h90.265c5.534 0 10.029 4.515 10.029 10.049v80.216c0 5.534-4.496 10.029-10.029 10.029h-212.34l45.877-45.877-14.182-14.182-70.089 70.088 70.206 70.206 14.182-14.182-45.994-45.994h212.341c16.592 0 30.088-13.497 30.088-30.088v-80.216c0-16.592-13.497-30.088-30.089-30.088z" />
      </svg>
    </motion.form>
  );
};

export default CommentForm;
