import { getSeoMetaData } from "@/app/data/seo/seo";
import ConfiguratorPage from "@/app/3d-configurator/[model]/ConfiguratorPage";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { model } = await params;
  const seoSlug = `/3d-configurator/${model}`;
  return getSeoMetaData(seoSlug);
}

export default async function Configurator({ params }) {
  const { model } = await params;

  return (
    <>
      {/* Server-visible semantic structure */}
      <h1 style={{ position: "absolute", left: "-9999px" }}>
        {model.replace(/-/g, " ")} 3D Configurator
      </h1>

      <nav style={{ position: "absolute", left: "-9999px" }}>
        <Link href="/3d-configurator/arm-chair">Arm Chair</Link>
        <Link href="/3d-configurator/modern-accent-chair">
          Modern Accent Chair
        </Link>
        <Link href="/3d-configurator/winter-jacket">Winter Jacket</Link>
      </nav>

      {/* Client app */}
      <ConfiguratorPage />
    </>
  );
}
