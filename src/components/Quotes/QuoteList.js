import React from "react";

import QuoteItem from "./QuoteItem";
import "./QuoteList.scss";

const QuoteList = (props) => {
  return (
    <div className="quotes-list">
      {props.quotes.map((item) => (
        <QuoteItem
          key={item.id}
          id={item.id}
          author={item.author}
          text={item.text}
          btn="true"
        />
      ))}
    </div>
  );
};

export default QuoteList;
