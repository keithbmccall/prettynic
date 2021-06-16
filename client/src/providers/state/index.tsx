import { createContext, FC, useContext, useEffect, useReducer } from "react";
import { PostType, usePostsQuery } from "../../data";

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

const fetchPosts = (dispatch) => (payload) =>
  dispatch({
    type: "FETCH_POSTS",
    payload,
  });

export const useAppContext = (): State => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("Use this only inside of context provider!");
  }
  return context;
};

export const usePosts = () => {
  return useAppContext()?.posts;
};

export const StateContextProvider: FC = ({ children }) => {
  const { posts } = usePostsQuery();
  const [state, dispatch] = useReducer(StateReducer, InitialState);

  const contextState = {
    ...state,
    onFetchPosts: fetchPosts(dispatch),
  };

  useEffect(() => {
    contextState.onFetchPosts(posts);
  }, [posts]);

  return (
    <StateContext.Provider value={contextState}>
      {children}
    </StateContext.Provider>
  );
};
