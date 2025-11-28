"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./ModelConfigurator.module.css";
import { useModelCustomization } from "@/app/components/context/ModelCustomization";

const ModelConfigurator = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // ---------------------------
  // CONTEXT
  // ---------------------------
  const { modelList, textureList } = useModelCustomization();
  const { selectedModel, setSelectedModel } = useModelCustomization();
  const { selectedTexture, setSelectedTexture } = useModelCustomization();

  // ---------------------------
  // AUTO-SELECT MODEL FROM URL
  // ---------------------------
  useEffect(() => {
    if (!modelList || modelList.length === 0) return;

    // pathname → /3d-configurator/arm-chair
    const slug = pathname.split("/")[2]; // "arm-chair"

    if (!slug) return;

    const match = modelList.find((m) => m.slug === slug);

    if (match) {
      setSelectedModel(match);
    }
  }, [pathname, modelList]);

  // ---------------------------
  // HANDLERS
  // ---------------------------
  const handleSelectedModel = (model) => {
    setSelectedModel(model);
    router.push(`/3d-configurator/${model?.slug}`);
  };

  return (
    <>
      {/* MOBILE */}
      {!isDesktop && (
        <div className={styles.model_configurator__mobile}>
          {/* MODEL DROPDOWN */}
          <div className={styles.model_configurator__section_model}>
            <div className={styles.model_configurator__model_title}>Model</div>

            <div className={styles.dropdown_container}>
              <div className={styles.dropdown_selected}>
                {selectedModel?.modelLabel}
              </div>

              <ul className={styles.dropdown_list}>
                {modelList.map((model, idx) => (
                  <li
                    key={idx}
                    className={styles.dropdown_item}
                    onClick={() => handleSelectedModel(model)}
                  >
                    {model?.modelLabel}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TEXTURE DROPDOWN */}
          <div className={styles.model_configurator__section_texture}>
            <div className={styles.model_configurator__texture_title}>
              Texture
            </div>

            <div className={styles.dropdown_container}>
              <div className={styles.dropdown_selected}>
                {selectedTexture?.textureLabel}
              </div>

              <ul className={styles.dropdown_list}>
                {textureList.map((texture, idx) => (
                  <li
                    key={idx}
                    className={styles.dropdown_item}
                    onClick={() => setSelectedTexture(texture)}
                  >
                    {texture?.textureLabel}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP */}
      {isDesktop && (
        <div className={styles.model_configurator__desktop}>
          {/* MODEL SELECT */}
          <div className={styles.model_configurator__desktop_section_model}>
            <div className={styles.model_configurator__desktop_title}>
              <span className={styles.model_configurator__desktop_title_label}>
                Selected Model :
              </span>
              <span className={styles.model_configurator__desktop_title_value}>
                {selectedModel?.modelLabel}
              </span>
            </div>

            <div className={styles.model_configurator__desktop_values}>
              {modelList.map((model, idx) => (
                <div
                  key={idx}
                  className={`${styles.desktop_item} ${
                    selectedModel === model ? styles.desktop_item_active : ""
                  }`}
                  onClick={() => handleSelectedModel(model)}
                >
                  <div className={styles.desktop_item_label}>
                    {model?.modelLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TEXTURE SELECT */}
          <div className={styles.model_configurator__desktop_section_texture}>
            <div className={styles.model_configurator__desktop_title}>
              <span className={styles.model_configurator__desktop_title_label}>
                Selected texture :
              </span>
              <span className={styles.model_configurator__desktop_title_value}>
                {selectedTexture?.textureLabel}
              </span>
            </div>

            <div className={styles.model_configurator__desktop_values}>
              {textureList.map((texture, idx) => (
                <div
                  key={idx}
                  className={`${styles.desktop_item} ${
                    selectedTexture === texture
                      ? styles.desktop_item_active
                      : ""
                  }`}
                  onClick={() => setSelectedTexture(texture)}
                >
                  <div className={styles.desktop_item_label}>
                    {texture?.textureLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModelConfigurator;
