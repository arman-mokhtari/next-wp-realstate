
import { BlockRenderer } from "@/components/BlockRenderer";
import { getPage } from "@/utils/getPage";
import { getSeo } from "@/utils/getSeo";
import { notFound } from "next/navigation";


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
