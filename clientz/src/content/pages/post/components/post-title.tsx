import { FC } from "react";
import { Link } from "react-router-dom";
import { Title } from "@components/text";

export interface PostTitleProps {
  className?: string;
  text: string;
  to?: string;
}

export const PostTitle: FC<PostTitleProps> = ({ text, to, className }) => {
  return to ? (
    <Link to={to} className="link dim dark-red">
      <Title className={className} text={text} />
    </Link>
  ) : (
    <Title className={className} text={text} />
  );
};
