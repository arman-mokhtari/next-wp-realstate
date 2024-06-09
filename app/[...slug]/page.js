import { BlockRenderer } from "components/blockRenderer";
import { notFound } from "next/navigation";
import React from "react";
import { getPage } from "utils/getPage";

const page = async ({ params }) => {
  const data = await getPage(params.slug.join("/"));
  if (!data) notFound();
  return <BlockRenderer blocks={data} />;
};

export default page;
  