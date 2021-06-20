export interface AuthorType {
  id: string;
  name: string;
  picture: ImageType;
  title: string;
  biography: string;
  posts: PostType[];
}

export interface ContentType {
  raw: string;
  html: string;
  markdown: string;
  text: string;
}

export interface ImageType {
  id: string;
  fileName: string;
  height: number;
  width: number;
  url: string;
}

export interface PostType {
  id: string;
  title: string;
  slug: string;
  date: Date;
  excerpt: string;
  coverImage: ImageType;
  content: ContentType;
  tags: string[];
  author: AuthorType;
}

//
export interface PagesType {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  content: ContentType;
}

export interface AllType {
  pages?: PagesType[];
  posts?: PostType[];
}
