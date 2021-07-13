import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageHeading from "../components/UI/PageHeading";
import "../components/Quotes/NewQuoteForm.scss";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import Button from "../components/UI/Button";
import HighlightedQuote from "../components/Quotes/HighlightedQuote";
import Comment from "../components/Comment/Comment";

const QuoteDetails = () => {
  const params = useParams();
  const { quoteId } = params;

  const [showComments, setShowComments] = useState(false);

  const {
    sendRequest,
    data: loadedQuote,
    status,
    error,
  } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const commentsHandler = () => {
    setShowComments(true);
  };

  let content;
  if (status === "pending") {
    content = <div>Please Wait</div>;
  }

  if (error) {
    content = <div>{error}</div>;
  }
  if (status === "completed") {
    content = (
      <>
        <PageHeading text={`By ${loadedQuote.author}`} />
        <HighlightedQuote text={loadedQuote.text} />
        {!showComments && (
          <div className="comments" style={{ marginTop: "20px" }}>
            <Button typeBtn={true} text="Comments" onClick={commentsHandler} />
          </div>
        )}
        {showComments && <Comment />}
      </>
    );
  }

  return <>{content}</>;
};

export default QuoteDetails;
