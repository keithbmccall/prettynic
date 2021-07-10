/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  createContext,
  Dispatch,
  FC,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { AllType, PagesType, PostType, useAllQuery } from "@data";

type State = {
  pages?: PagesType[];
  posts?: PostType[];
  isLoading?: boolean;
};

const InitialState: State = {
  pages: [],
  posts: [],
  isLoading: false,
};

const StateContext = createContext<State>(InitialState);

type ActionType<Name extends string, Payload = {}> = {
  type: Name;
  payload: Payload;
};

type Action = ActionType<"FETCH_ALL", AllType>;

const StateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const fetchAll = (dispatch: Dispatch<Action>) => (payload: State) =>
  dispatch({
    type: "FETCH_ALL",
    payload,
  });

export const useAppContext = (): State => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("Use this only inside of context provider!");
  }
  return context;
};

type ContextStateType = State & {
  onFetchAll: (payload: State) => void;
};

export const StateContextProvider: FC = ({ children }) => {
  const allData = useAllQuery();

  const [state, dispatch] = useReducer(StateReducer, InitialState);

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

export const usePosts = () => {
  return useAppContext()?.posts;
};

export const usePages = () => {
  return useAppContext()?.pages;
};

export const useAbout = () => {
  return useAppContext()?.pages?.find((page) => page.title === "About");
};
