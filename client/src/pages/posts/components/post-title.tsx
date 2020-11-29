import React from "react";
import { Link } from "react-router-dom";

export const PostTitle = ({ isHome, title, to }) => {
  return (
    <h2 className="f2 tc mt2 mb1">
      {isHome ? <Link to={to}>{title}</Link> : title}
    </h2>
  );
};
