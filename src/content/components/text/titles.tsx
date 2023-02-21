import { FC } from '@global-types';
import classNames from 'classnames';

export interface TitleProps {
  className?: string;
  text: string;
}

export const Title: FC<TitleProps> = ({ className, text }) => {
  return <h2 className={classNames('mt2 mb1 b', className)}>{text}</h2>;
};
