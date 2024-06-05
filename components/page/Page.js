import { BlockRenderer } from "components/blockRenderer";
import { MainMenu } from "components/mainMenu";

const Page = (props) => {
  return (
    <div>
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
