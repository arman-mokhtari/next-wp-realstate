import { BlockRenderer } from "components/blockRenderer";
import React from "react";
import { getPage } from "utils/getPage";

const page = async () => {
  const data = await getPage("/");
  console.log("data :", data);
  return <BlockRenderer blocks={data} />;
};

export default page;
