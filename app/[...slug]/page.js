import { BlockRenderer } from "components/blockRenderer";
import { notFound } from "next/navigation";
import React from "react";
import { getPage } from "utils/getPage";
import { getSeo } from "utils/getSeo";

const page = async ({ params }) => {
  const data = await getPage(params.slug.join("/"));
  if (!data) notFound();
  return <BlockRenderer blocks={data} />;
};

export default page;

export async function generateMetadata({ params }) {
  const seo = await getSeo(params.slug.join("/"));
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}
