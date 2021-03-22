import {AuthorType} from "../authors";

export interface PostType  {
    id: string;
    title: string;
    timestamp: string;
    body: string;
    author: AuthorType;
};
