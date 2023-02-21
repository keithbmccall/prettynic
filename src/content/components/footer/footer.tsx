import { Divider } from '@components/pieces';
import { FinePrint } from './fine-print';

export const Footer = () => {
  return (
    <div className="center tc pv3 w-100">
      <div className="w-90 center">
        <Divider />
        <p className="f6 gray">Footer content</p>
        <FinePrint />
      </div>
    </div>
  );
};
