import { FC } from "react";
import classNames from "classnames";

export interface TimeProps {
  time: string;
  className?: string;
}

export const Time: FC<TimeProps> = ({ time, className }) => {
  return (
    <p
      className={classNames(
        "ma0 f6 tc light-silver w-90 center time",
        className
      )}
    >
      {time}
    </p>
  );
};
