import { FC } from "react";
import classNames from "classnames";
import { usePlatformContext } from "@providers";

export interface TimeProps {
  time: string;
  className?: string;
}
const timeStyle = { fontSize: "11px" };

export const Time: FC<TimeProps> = ({ time, className }) => {
  const { isMobile } = usePlatformContext();

  const style = (isMobile && timeStyle) || {};

  return (
    <p
      className={classNames(
        "ma0 f6 tc light-silver w-90 center time",
        className
      )}
      style={style}
    >
      {time}
    </p>
  );
};
