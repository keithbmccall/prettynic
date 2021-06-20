/* eslint-disable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment, @typescript-eslint/ban-ts-comment,  @typescript-eslint/no-use-before-define*/
import { FC, ReactElement } from "react";
import parse, { DOMNode } from "html-react-parser";
import classNames from "classnames";
import { useIsDarkMode, usePlatformContext } from "@providers";
import { BlockImage } from "@components/images";

interface ContentBlocksProps {
  content: {
    html: string;
  };
  containerClassName?: string;
}

export const ContentBlocks: FC<ContentBlocksProps> = ({
  content,
  containerClassName,
}) => {
  const { isMobile } = usePlatformContext();
  const isDarkMode = useIsDarkMode();

  return (
    <div
      id="content-block"
      className={classNames(
        "justify-content items-center flex flex-column",
        containerClassName,
        { "dark-mode": isDarkMode }
      )}
    >
      {parse(content.html, {
        // @ts-expect-error
        replace: replacer(isMobile),
      })}
    </div>
  );
};

type DomNodeType = DOMNode & {
  name: "div" | "img" | "p";
  attribs: any;
};

type Replacer = (
  isMobile: boolean
) => (domNode: DomNodeType) => Element | ReactElement | undefined;

const replacer: Replacer = (isMobile) => (domNode) => {
  if (domNode?.name === "img") {
    const image = domNode.attribs;

    const size = isMobile ? {} : { height: image.height, width: image.width };
    return (
      <BlockImage src={image.src} alt={image.title} {...size} className="mv2" />
    );
  }
  return undefined;
};
