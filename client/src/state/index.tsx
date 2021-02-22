import React, { createContext, FC, useReducer } from "react";
import { PostType } from "./types";

type State = {
  posts: PostType[];
};

const InitialState: State = {
  posts: [],
};

const StateContext = createContext<State>(InitialState);

const StateReducer = (state: State, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: action.value };
    default:
      return state;
  }
};

export const useAppState = () => {
  const [state, dispatch] = useReducer(StateReducer, InitialState);

  return { state, dispatch };
};

export const usePosts = () => {
  const { state } = useAppState();
  return state.posts;
};

export const setPosts = (posts) => {
  // const { dispatch } = useAppState();
  // return dispatch({
  //   type: "FETCH_POSTS",
  //   value: posts,
  // });
};

export const StateContextProvider: FC = ({ children }) => {
  const { state } = useAppState();

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};
