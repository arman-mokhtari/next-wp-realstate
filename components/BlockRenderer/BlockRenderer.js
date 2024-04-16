import Column from "components/column/Column";
import Columns from "components/columns/Columns";
import Cover from "components/cover/Cover";
import CallToAction from "components/cta/CallToAction";
import Heading from "components/heading/Heading";
import Paragraph from "components/paragraph/Paragraph";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "acf/ctabutton": {
        return (
          <CallToAction
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            textAlign={block.attributes.textAlign}
            level={block.attributes.level}
            content={block.attributes.content}
          />
        );
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/columns": {
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        return (
          <Column key={block.id} width={block.attributes?.width}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/group":
      case "core/block": {
        return <BlockRenderer blocks={block.innerBlocks} key={block.id} />;
      }
      case "core/image": {
        return (
          <Image
            key={block.id}
            src={block.attributes?.url}
            width={block.attributes.width}
            height={block.attributes.height}
            alt={block.attributes.alt || ""}
          />
        );
      }
      default: {
        console.log("unknown: ", block);
        return null;
      }
    }
  });
};
