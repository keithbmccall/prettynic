'use client';
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DC } from '@global-types';
import { createContext, useContext } from 'react';
import { Data } from './reducer';

const initialState: Data = {
  isLoading: false,
  pages: [],
  posts: [],
};

const DataContext = createContext<Data>(initialState);

export const DataProvider: DC<Data> = ({
  children,
  isLoading,
  pages,
  posts,
}) => {
  console.log({
    pages,
    posts,
  });
  return (
    <DataContext.Provider
      value={{
        isLoading,
        pages,
        posts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useAppContext = (): Data => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('Use this only inside of context provider!');
  }
  return context;
};
