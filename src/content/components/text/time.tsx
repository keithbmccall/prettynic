import { DC } from '@global-types';
import { usePlatformContext } from '@providers';
import classNames from 'classnames';

export interface TimeProps {
  time: string;
  className?: string;
}
const timeStyle = { fontSize: '11px' };

export const Time: DC<TimeProps> = ({ time, className }) => {
  const { isMobile } = usePlatformContext();

  const style = (isMobile && timeStyle) || {};

  return (
    <p
      className={classNames('ma0 f6 light-silver w-90 center time', className)}
      style={style}
    >
      {time}
    </p>
  );
};
