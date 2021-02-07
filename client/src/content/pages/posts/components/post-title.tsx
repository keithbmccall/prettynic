import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useRouter } from "../../../../router";

export interface PostTitle {
  title: string;
  to: string;
}

export const PostTitle: FC<PostTitle> = ({ title, to }) => {
  const { isHome } = useRouter();

  return (
    <h2 className="f2 tc mt2 mb1">
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
