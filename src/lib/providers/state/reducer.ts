import { PagesType, PostType } from '@data';
import { Action } from './actions';

export type Data = {
  pages: PagesType[] | undefined;
  posts: PostType[] | undefined;
  isLoading?: boolean;
};

export const Reducer = (state: Data, action: Action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
