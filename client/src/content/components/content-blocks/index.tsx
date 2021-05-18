import React, { FC, ReactElement } from "react";
import parse, { DOMNode } from "html-react-parser";
import { BlockImage } from "../images";
import classNames from "classnames";
import { usePlatformContext } from "../../../platform";

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

  return (
    <div
      id="content-block"
      className={classNames(
        "justify-content items-center flex flex-column",
        containerClassName
      )}
    >
      {parse(content.html, {
        // @ts-ignore
        replace: replacer(isMobile),
      })}
    </div>
  );
};

type DomNodeType = DOMNode & {
  name: "p" | "img" | "div";
  attribs: any;
};

type Replacer = (
  isMobile: boolean
) => (domNode: DomNodeType) => Element | ReactElement | undefined;

const replacer: Replacer = (isMobile: boolean) => (domNode: DomNodeType) => {
  if (domNode?.name === "img") {
    const image = domNode.attribs;
    const size = isMobile ? {} : { height: image.height, width: image.width };
    return (
      <BlockImage src={image.src} alt={image.title} {...size} className="mv2" />
    );
  }
};
