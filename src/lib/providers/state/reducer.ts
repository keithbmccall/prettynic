import { PagesType, PostType } from '@data';
import { Action } from './actions';

export type State = {
  pages?: PagesType[];
  posts?: PostType[];
  isLoading?: boolean;
};

export const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
