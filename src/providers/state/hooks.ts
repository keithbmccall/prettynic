import {useAppContext} from "./state-context-provider";

export const usePosts = () => {
    return useAppContext()?.posts;
};

export const usePages = () => {
    return useAppContext()?.pages;
};

export const useAbout = () => {
    return useAppContext()?.pages?.find(page => page.title === 'About');
};
