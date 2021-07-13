import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import "./Comment.scss";
import CommentForm from "./CommentForm";

const Comment = () => {
  const params = useParams();
  // const [totalComments, setTotalComments] = useState();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedComments,
    error,
  } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const onAddingComment = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let commentContent;

  if (status === "pending") {
    commentContent = <div></div>;
  }
  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    commentContent = <div>No Commnets yet. </div>;
  }
  if (error) {
    commentContent = <div>{error.message || "Something Went Wrong"}</div>;
  }
  if (status === "completed" && loadedComments.length !== 0) {
    commentContent = (
      <motion.div
        className="comment__section--comments"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.5 }}
      >
        {loadedComments.map((comment, key) => {
          return (
            <div>
              <p>{comment.text}</p>
            </div>
          );
        })}
      </motion.div>
    );
  }

  return (
    <div className="comment">
      <CommentForm onAddingComment={onAddingComment} quoteId={quoteId} />
      <div className="comment__section">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          className="comment__section--heading"
        >
          Comments
        </motion.h2>
        {commentContent}
      </div>
    </div>
  );
};

export default Comment;
