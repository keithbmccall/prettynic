import { FC } from '@global-types';
import { scrollToTop } from '@utils';
import { useEffect } from 'react';

interface PageProps {
  flush?: boolean;
}

export const Page: FC<PageProps> = ({ children }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="flex flex-column w-100 items-center pt5">{children}</div>
  );
};
