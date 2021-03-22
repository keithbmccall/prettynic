import { useLocation, useRouteMatch } from "react-router-dom";
import { Locations } from "../../../router/urls";

const getPostTo = (id: string | number) => `${Locations.POST}${id}`;

export const useRouter = () => {
  const routeMatch = useRouteMatch();
  const { pathname, search, hash, state } = useLocation();

  const isHome = pathname === Locations.HOME;

  return {
    path: pathname,
    query: search,
    hash,
    routerState: state,
    isHome,
    getPostTo,
    routeMatch,
  };
};
