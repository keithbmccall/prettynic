import { AllType } from '@data';
import {Dispatch} from "react";
import {State} from "./reducer";

type ActionType<Name extends string, Payload = {}> = {
  type: Name;
  payload: Payload;
};

export type Action = ActionType<'FETCH_ALL', AllType>;

export const fetchAll = (dispatch: Dispatch<Action>) => (payload: State) =>
    dispatch({
      type: 'FETCH_ALL',
      payload,
    });
