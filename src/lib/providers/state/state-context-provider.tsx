/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useAllQuery } from '@data';
import { DC } from '@global-types';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { fetchAll } from './actions';
import { Reducer, State } from './reducer';

const initialState: State = {
  isLoading: false,
  pages: [],
  posts: [],
};

const StateContext = createContext<State>(initialState);

type ContextStateType = State & {
  onFetchAll: (payload: State) => void;
};

export const StateContextProvider: DC = ({ children }) => {
  const allData = useAllQuery();

  const [state, dispatch] = useReducer(Reducer, initialState);

  const { isLoading, pages, posts } = allData;

  const contextState: ContextStateType = {
    ...state,
    onFetchAll: fetchAll(dispatch),
  };

  useEffect(() => {
    contextState.onFetchAll({ pages, posts, isLoading });
  }, [pages, posts]);

  console.log({ contextState });
  return (
    <StateContext.Provider value={contextState}>
      {children}
    </StateContext.Provider>
  );
};

export const useAppContext = (): State => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('Use this only inside of context provider!');
  }
  return context;
};
