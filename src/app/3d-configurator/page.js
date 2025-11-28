import { getSeoMetaData } from "@/app/data/seo/seo";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return getSeoMetaData("/3d-configurator");
}

export default function Configurator() {
  redirect("/3d_configurator/arm-chair");
}
