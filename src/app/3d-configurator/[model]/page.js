import { getSeoMetaData } from "@/app/data/seo/seo";

import ConfiguratorPage from "@/app/3d-configurator/[model]/ConfiguratorPage";

export async function generateMetadata({ params }) {
  const { model } = await params;
  const seoSlug = `/3d-configurator/${model}`;
  return getSeoMetaData(seoSlug);
}

export default function Configurator({ params }) {
  const { model } = params;

  return (
    <>
      {/* Server-visible semantic structure */}
      <h1 style={{ position: "absolute", left: "-9999px" }}>
        {model.replace("-", " ")} 3D Configurator
      </h1>

      <nav style={{ position: "absolute", left: "-9999px" }}>
        <a href="/3d-configurator/arm-chair">Arm Chair</a>
        <a href="/3d-configurator/modern-accent-chair">Modern Accent Chair</a>
        <a href="/3d-configurator/winter-jacket">Winter Jacket</a>
      </nav>

      {/* Client app */}
      <ConfiguratorPage />
    </>
  );
}
