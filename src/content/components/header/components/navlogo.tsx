import classNames from 'classnames';
import { usePlatformContext } from '../../../../providers/platform';
import { LOCATIONS } from '../../../../router';

export const Navlogo = () => {
  const { isMobile } = usePlatformContext();
  return (
    <a
      className={classNames('mid-gray link dim w-25-l mb2 mb0-l', {
        tc: isMobile,
      })}
      href={LOCATIONS.HOME}
      title="Home"
    >
      <img
        src="http://tachyons.io/img/logo.jpg"
        className="dib w2 h2 br-100"
        alt="Site Name"
      />
    </a>
  );
};
