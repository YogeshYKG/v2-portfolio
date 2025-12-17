import { Suspense } from "react";

import { getSeoMetaData } from "./data/seo/seo";
import NotFoundComponent from "./notFound";

export async function generateMetadata() {
  return getSeoMetaData("/");
}

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundComponent />
    </Suspense>
  );
}
