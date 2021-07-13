import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import "./Header.scss";

const headerVariant = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.9,
      delay: 0.8,
    },
  },
};

const Header = () => {
  const location = useLocation();
  let { pathname } = location;

  return (
    <motion.header
      className="header"
      variants={headerVariant}
      initial="hidden"
      animate="visible"
    >
      <h1>Quotes App</h1>
      <nav className="nav">
        <NavLink
          activeClassName="active"
          to="/quotes"
          className={`link ${pathname === "/quotes" ? "is-selected" : ""}`}
        >
          All Quotes
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/new-quote"
          className={`link ${pathname === "/new-quote" ? "is-selected" : ""}`}
        >
          Add a Quote
        </NavLink>
      </nav>
    </motion.header>
  );
};

export default Header;
