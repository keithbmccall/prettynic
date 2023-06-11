import parse, { DOMNode } from 'html-react-parser';

type Replacer = (
  domNode: DOMNode & {
    name: 'div' | 'img' | 'p';
    attribs: {
      src: string;
      title: string;
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
) => JSX.Element | object | void | undefined | null | false;

type ParseContent = (
  html: string,
  replace: Replacer,
) => string | JSX.Element | JSX.Element[];

export const parseContent: ParseContent = (html, replace) =>
  parse(html, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    replace,
  });
