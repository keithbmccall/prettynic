import { DC } from '@global-types';
import classNames from 'classnames';

export interface TitleProps {
  className?: string;
  text: string;
}

export const Title: DC<TitleProps> = ({ className, text }) => {
  return <h2 className={classNames('ma0 b', className)}>{text}</h2>;
};
