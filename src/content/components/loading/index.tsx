import Loader from 'react-loader-spinner';
import { useHeaderHeight } from '../../hooks';

export const Loading = () => {
  const { headerHeight } = useHeaderHeight();
  return (
    <div
      className="fixed z-9999 w-100 h-100 left-0  bg-black"
      style={{
        top: headerHeight,
      }}
    >
      <div className="flex items-center justify-center h-100">
        <Loader type="TailSpin" height={100} width={100} color="#fff" />
      </div>
    </div>
  );
};
