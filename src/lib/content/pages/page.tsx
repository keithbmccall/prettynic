import { DC } from '@global-types';
import { scrollToTop } from '@utils';
import { useEffect } from 'react';

interface PageProps {
  flush?: boolean;
}

export const Page: DC<PageProps> = ({ children }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="flex flex-column w-100 items-center pt5">{children}</div>
  );
};
