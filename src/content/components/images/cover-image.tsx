import { DC } from '@global-types';
import classNames from 'classnames';
import { ImageProps } from './types';

export const CoverImage: DC<ImageProps> = ({ src, alt, className }) => (
  <div className="mb3 flex justify-center" style={{ maxHeight: '600px' }}>
    <img
      src={src}
      alt={alt}
      className={classNames('w-100 h-auto', className)}
      style={{
        objectFit: 'contain',
      }}
    />
  </div>
);
