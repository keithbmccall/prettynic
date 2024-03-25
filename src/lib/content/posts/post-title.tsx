import { Title } from '@components/text';
import { DC } from '@global-types';

export interface PostTitleProps {
  className?: string;
  text: string;
  to?: string;
}

export const PostTitle: DC<PostTitleProps> = ({ text, to, className }) => {
  return <Title className={className} text={text} />;
};
