import { getSeoMetaData } from "../data/seo/seo";

import ArchiveComponent from "./ArchiveComponent";

export async function generateMetadata() {
  return getSeoMetaData("/archive");
}

export default function Archive() {
  return <ArchiveComponent />;
}
