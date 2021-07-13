import React, { useEffect } from "react";
import { motion } from "framer-motion";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

import QuoteList from "../components/Quotes/QuoteList";
import PageHeading from "../components/UI/PageHeading";
import Greeting from "../components/UI/Greeting";

const statusVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.8,
    },
  },
};

const AllQuote = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content;

  // if (status === "pending") {
  //   content = <div>Please Wait</div>;
  // }

  if (error) {
    content = (
      <motion.div
        variants={statusVariant}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {error}
      </motion.div>
    );
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    content = (
      <motion.div
        variants={statusVariant}
        initial="hidden"
        animate="show"
        exit="hidden"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No quotes Found
      </motion.div>
    );
  }

  if (status === "completed" && loadedQuotes.length !== 0) {
    content = <QuoteList quotes={loadedQuotes} />;
  }

  return (
    <section className="quotes-section">
      <PageHeading text="All Quotes" />
      <Greeting />
      {content}
    </section>
  );
};

export default AllQuote;
