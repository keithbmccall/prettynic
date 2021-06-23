import classNames from "classnames";
import { FC } from "react";

export interface TitleProps {
  className?: string;
  text: string;
}

export const Title: FC<TitleProps> = ({ className, text }) => {
  return <h2 className={classNames("tc mt2 mb1 b", className)}>{text}</h2>;
};
