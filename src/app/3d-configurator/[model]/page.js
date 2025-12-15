import { getSeoMetaData } from "@/app/data/seo/seo";

import ConfiguratorPage from "@/app/3d-configurator/[model]/ConfiguratorPage";

export async function generateMetadata({ params }) {
  const { model } = await params;
  const seoSlug = `/3d-configurator/${model}`;
  return getSeoMetaData(seoSlug);
}

export default function Configurator() {
  return <ConfiguratorPage />;
}
