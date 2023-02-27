import { DC } from '@global-types';
import classNames from 'classnames';
import { ImageProps } from './types';

export const BlockImage: DC<ImageProps> = ({
  src,
  alt,
  className,
  height,
  width,
}) => (
  <div
    className={classNames(className)}
    style={{
      height: `${height}px`,
      width: `${width}px`,
    }}
  >
    <img src={src} alt={alt} className="w-100" />
  </div>
);
