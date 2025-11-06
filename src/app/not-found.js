import { getSeoMetaData } from "./data/seo/seo";
import NotFoundComponent from "./notFound";


export async function generateMetadata() {
  return getSeoMetaData("/");
}

export default function NotFound() {
  return (
    <NotFoundComponent />
  );
}
