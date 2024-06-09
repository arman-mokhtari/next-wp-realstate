import { BlockRenderer } from "components/blockRenderer";
import React from "react";
import { getPage } from "utils/getPage";

const page = async () => {
  const data = await getPage("/");
  return <BlockRenderer blocks={data} />;
};

export default page;
