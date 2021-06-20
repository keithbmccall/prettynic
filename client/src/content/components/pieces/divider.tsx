import { FC } from "react";
import classNames from "classnames";
import { useIsDarkMode } from "@providers";

export interface DividerProps {
  width?: string;
  color?: string;
}

export const Divider: FC<DividerProps> = ({ width, color }) => {
  const isDarkMode = useIsDarkMode();
  const style = (width && { borderTopWidth: width }) || {};
  return (
    <span
      className={classNames("db bt", {
        [`b--${color}`]: color,
        [`b--${isDarkMode ? "dark-gray" : "gray"}`]: !color,
      })}
      style={style}
    />
  );
};
