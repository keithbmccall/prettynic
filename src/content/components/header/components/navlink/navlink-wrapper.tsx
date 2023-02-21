import { navlinks } from '@data';
import { FC } from '@global-types';
import { usePlatformContext } from '@providers';
import classNames from 'classnames';
import { Navlink } from './navlink';

interface NavlinkWrapperProps {
  onClick?: () => void;
}
export const NavlinkWrapper: FC<NavlinkWrapperProps> = ({ onClick }) => {
  const { isMobile } = usePlatformContext();

  return (
    <ul
      className={classNames('list pa0 flex', {
        'justify-center ': !isMobile,
        'flex-column tc w-100 pl0': isMobile,
      })}
    >
      {navlinks.map(link => (
        <Navlink
          key={`${link.name}_${link.href}`}
          link={link}
          onClick={() => isMobile && onClick?.()}
        />
      ))}
    </ul>
  );
};
