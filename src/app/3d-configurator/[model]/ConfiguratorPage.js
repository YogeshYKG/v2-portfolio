"use client";

import React, { useEffect, useState } from "react";
import Icon from "@/app/components/svg/Icon";
import { usePathname, useRouter } from "next/navigation";
import styles from "./page.module.css";
import ConfiguratorViewer from "@/app/components/configurator-viewer/ConfiguratorViewer";
import ModelConfigurator from "@/app/components/model_configurator/ModelConfigurator";
import {
  ModelCustomizationProvider,
  useModelCustomization,
} from "@/app/components/context/ModelCustomization";

const ConfiguratorContent = () => {
  const pathname = usePathname();
  const slug = pathname.split("/")[2]; // arm-chair, sofa, etc.

  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);

  const { modelList, selectedModel, setSelectedModel } =
    useModelCustomization();

  // detect Desktop
  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // get model from slug and set it to context
  useEffect(() => {
    if (!modelList) return;

    const found = modelList.find((m) => m.slug === slug);
    if (found) {
      setSelectedModel(found); // or found.title
    }
  }, [slug, modelList]);

  return (
    <>
      <div className={styles.configuratorWrapper}>
        <ConfiguratorViewer />
      </div>

      <div className={styles.pageLayout}>
        <div className={styles.container}>
          <header className={styles.headerContent}>
            <section className={styles.headerSection}>
              <div
                className={styles.breadCrum}
                onClick={() => router.push("/")}
              >
                <Icon name="arrow" size={20} rotate={225} />
                Yogesh kr. Gupta
              </div>

              <div className={styles.title}>
                <span>{selectedModel?.modelLabel}</span>

                <span
                  className={styles.settingIcon}
                  onClick={() => setSettingOpen(!settingOpen)}
                >
                  <Icon name={"setting"} />
                </span>

                {settingOpen && <ModelConfigurator />}
              </div>
            </section>
          </header>

          {isDesktop && (
            <main className={styles.mainContent}>
              <section id="projects" className={styles.configuratorSection}>
                <ModelConfigurator />
              </section>
            </main>
          )}
        </div>
      </div>
    </>
  );
};

export default function ConfiguratorPage() {
  return (
    <ModelCustomizationProvider>
      <ConfiguratorContent />
    </ModelCustomizationProvider>
  );
}
