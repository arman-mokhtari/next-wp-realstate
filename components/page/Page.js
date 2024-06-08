import { BlockRenderer } from "components/blockRenderer";
import { MainMenu } from "components/mainMenu";
import Head from "next/head";

const Page = (props) => {
  return (
    <div>
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
      </Head>
      <MainMenu
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
      />
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
};

export default Page;
