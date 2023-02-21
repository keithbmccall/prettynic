import { FC } from '@global-types';
import { useIsDarkMode } from '@providers';
import classNames from 'classnames';

export interface DividerProps {
  width?: string;
  color?: string;
  className?: string;
}

export const Divider: FC<DividerProps> = ({ width, color, className }) => {
  const isDarkMode = useIsDarkMode();
  const style = (width && { borderTopWidth: width }) || {};
  return (
    <span
      className={classNames(
        'db bt',
        {
          [`b--${color}`]: color,
          [`b--${isDarkMode ? 'dark-gray' : 'gray'}`]: !color,
        },
        className,
      )}
      style={style}
    />
  );
};
