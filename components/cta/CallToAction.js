import ButtonLink from "components/buttonLink/ButtonLink";
import React from "react";

const CallToAction = ({ align = "left", buttonLabel, destination }) => {
  const alignMap = {
    left: "text-align",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={destination} label={buttonLabel} />
    </div>
  );
};

export default CallToAction;
