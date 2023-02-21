import { PropsWithChildren } from 'react';

export interface FC<P = {}> {
  (props: PropsWithChildren<P>, context?: any): React.ReactElement<
    any,
    any
  > | null;
}
// export type FC = React.FC & {
//     children?: React.ReactNode
// }
