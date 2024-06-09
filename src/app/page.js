import { BlockRenderer } from "@/components/BlockRenderer";
import { getPage } from "@/utils/getPage";
import { getSeo } from "@/utils/getSeo";

const page = async () => {
  const data = await getPage("/");
  return <BlockRenderer blocks={data} />;
};

export default page;

export async function generateMetadata() {
  const seo = await getSeo("/");
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}
