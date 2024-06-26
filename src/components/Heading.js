import { getFontSizeForHeading, getTextAlign } from "@/utils/fonts";
import { createElement } from "react";

const Heading = ({ textAlign, content, level=2 }) => {
  const tag = createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};

export default Heading;
