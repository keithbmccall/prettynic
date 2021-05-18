import {  useLocation, useRouteMatch } from "react-router-dom";
import { LOCATIONS } from "../../../router/urls";

type GetPostTo = (id: number | string) => string;

interface RouteParams {
  [key: string]: number | string;
}

interface RouteMatch {
  isExact: boolean;
  params?: RouteParams;
  path: string;
  url: string;
}

const getPostTo: GetPostTo = (id) => `${LOCATIONS.POST}${id}`;

export const useRouter = (): {
  getPostTo: GetPostTo;
  hash: string;
  isHome: boolean;
  path: string;
  query: string;
  routeMatch: RouteMatch;
  routeParams: RouteParams;
  routerState: unknown;
} => {
  const routeMatch = useRouteMatch();
  const { pathname, search, hash, state } = useLocation();

  const isHome = pathname === LOCATIONS.HOME;

  return {
    path: pathname,
    query: search,
    hash,
    routerState: state,
    isHome,
    getPostTo,
    routeMatch,
    routeParams: routeMatch?.params,
  };
};
