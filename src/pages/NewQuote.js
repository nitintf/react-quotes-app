import React from "react";

import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import NewQuoteForm from "../components/Quotes/NewQuoteForm";
import PageHeading from "../components/UI/PageHeading";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const onAddQuote = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <>
      <PageHeading text="New Quote" />
      <NewQuoteForm onAddQuote={onAddQuote} />
    </>
  );
};

export default NewQuote;
