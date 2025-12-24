import { getSeoMetaData } from "@/app/data/seo/seo";
import { permanentRedirect } from "next/navigation";

export async function generateMetadata() {
  return getSeoMetaData("/3d-configurator");
}

export default function Configurator() {
  permanentRedirect("/3d-configurator/arm-chair");
}
