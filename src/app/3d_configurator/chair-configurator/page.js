import { getSeoMetaData } from "@/app/data/seo/seo";

import ChairConfigurator from "@/app/3d_configurator/chair-configurator/ChairConfigurator";

export async function generateMetadata() {
  return getSeoMetaData("/chair-configurator");
}

export default function Configurator() {
  return <ChairConfigurator />;
}
