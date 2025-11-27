"use client";

import React, { useEffect, useState } from "react";
import Icon from "@/app/components/svg/Icon";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import ChairConfigurator3d from "@/app/components/chair_configurator/ChairConfigurator";
import ModelConfigurator from "@/app/components/model_configurator/ModelConfigurator";
import { ModelCustomizationProvider } from "@/app/components/context/ModelCustomization";

const ChairConfigurator = () => {
  const [settingOpen, setSettingOpen] = useState(false);
  const router = useRouter();

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkWidth(); // run once
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <ModelCustomizationProvider>
      <div className={styles.configuratorWrapper}>
        <ChairConfigurator3d />
      </div>
      <div className={styles.pageLayout}>
        <div className={styles.container}>
          <header className={styles.headerContent}>
            <section className={styles.headerSection}>
              <div
                className={styles.breadCrum}
                onClick={() => router.push("/3d_configurator")}
              >
                <Icon
                  name="arrow"
                  size={20}
                  color="currentColor"
                  rotate={180 + 45}
                />
                3d Configurator
              </div>
              <div className={styles.title}>
                <span className="">Chair Configurator</span>
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
    </ModelCustomizationProvider>
  );
};

export default ChairConfigurator;
