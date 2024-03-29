import { DC } from '@global-types';
interface HamburgerProps {
  onClick: () => void;
}

export const Hamburger: DC<HamburgerProps> = ({ onClick }) => (
  <div className="absolute left-1 h-100 flex items-center">
    <div onClick={onClick} id="hamburger">
      <span />
      <span />
      <span />
    </div>
  </div>
);
