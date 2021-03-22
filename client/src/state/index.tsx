import React, { createContext, FC, useReducer } from "react";
import { PostType } from "../data";

type State = {
  posts: PostType[];
};

const InitialState: State = {
  posts: [],
};

const StateContext = createContext<State>(InitialState);

type ActionType<Name extends string, Payload = {}> = {
  type: Name;
  payload: Payload;
};

type Action = ActionType<"FETCH_POSTS", PostType[]>;

const StateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: action.payload };
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

export const setPosts = () => {
  // const { dispatch } = useAppState();
  // return dispatch({
  //   type: "FETCH_POSTS",
  //   payload: posts,
  // });
};

export const StateContextProvider: FC = ({ children }) => {
  const { state } = useAppState();

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};
