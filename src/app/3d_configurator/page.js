import { getSeoMetaData } from "@/app/data/seo/seo";

import ConfiguratorComponent from "./ConfiguratorComponent";

export async function generateMetadata() {
  return getSeoMetaData("/3d_configurator");
}

export default function Configurator() {
  return <ConfiguratorComponent />;
}
