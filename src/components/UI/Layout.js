import React from "react";

import "./Layout.scss";

const Card = (props) => {
  return <section className="layout">{props.children}</section>;
};

export default Card;
