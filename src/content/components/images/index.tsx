import { FC } from '@global-types';
import classNames from 'classnames';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
}

export const CoverImage: FC<ImageProps> = ({ src, alt, className }) => (
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

export const BlockImage: FC<ImageProps> = ({
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
