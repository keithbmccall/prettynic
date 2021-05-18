import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useRouter } from "../../hooks";
import classNames from "classnames";

export interface PostTitle {
  className: string;
  title: string;
  to: string;
}

export const PostTitle: FC<PostTitle> = ({ title, to, className }) => {
  const { isHome } = useRouter();

  return (
    <h2 className={classNames("f2 tc mt2 mb1", className)}>
      {isHome ? (
        <Link to={to} className="link dim dark-blue">
          {title}
        </Link>
      ) : (
        title
      )}
    </h2>
  );
};
