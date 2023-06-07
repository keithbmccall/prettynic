import { DC } from '@global-types';
import { useIsDarkMode, usePlatformContext } from '@providers';
import classNames from 'classnames';
import { Footer } from '../footer';

export const Layout: DC = ({ children }) => {
  const { isMobile } = usePlatformContext();
  const isDarkMode = useIsDarkMode();

  return (
    <div
      className={classNames('main center', {
        'pt5 mt5 mt4-l': !isMobile,
        // "bg-black white": isDarkMode,
        // "bg-white black": !isDarkMode,
        'bg-black black': isDarkMode,
        'bg-white black': !isDarkMode,
      })}
    >
      <div className="center">{children}</div>
      <Footer />
    </div>
  );
};
