import { Title } from '@components/text';
import { DC } from '@global-types';

export interface PostTitleProps {
  className?: string;
  text: string;
  to?: string;
}

export const PostTitle: DC<PostTitleProps> = ({ text, to, className }) => {
  return;
  // to ? (
  //   <Link to={to} className="link dim dark-red">
  //     <Title className={className} text={text} />
  //   </Link>
  // ) :
  <Title className={className} text={text} />;
};
