import { TailSpin } from 'react-loader-spinner';
import { useHeaderHeight } from '../../hooks';

export const Loading = () => {
  const { headerHeight } = useHeaderHeight();
  return (
    <div
      className="fixed z-9999 w-100 h-100 left-0 bg-white"
      style={{
        top: headerHeight,
      }}
    >
      <div className="flex items-center justify-center h-100">
        <TailSpin height={100} width={100} color="#fff" />
      </div>
    </div>
  );
};
