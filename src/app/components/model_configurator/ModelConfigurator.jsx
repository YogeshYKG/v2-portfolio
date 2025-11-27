"use client";

import React, { useEffect, useState } from "react";
import styles from "./ModelConfigurator.module.css";
import { useModelCustomization } from "@/app/components/context/ModelCustomization";

const ModelConfigurator = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkWidth(); // run once
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const { selectedModel, setSelectedModel } = useModelCustomization();
  const { selectedTexture, setSelectedTexture } = useModelCustomization();

  return (
    <>
      {!isDesktop && (
        <div className={styles.model_configurator__mobile}>
          <div className={styles.model_configurator__section_model}>
            <div className={styles.model_configurator__model_title}>Model</div>

            <div className={styles.dropdown_container}>
              <div className={styles.dropdown_selected}>{selectedModel}</div>

              <ul className={styles.dropdown_list}>
                {["Model 1", "Model 2", "Model 3"].map((model, idx) => (
                  <li
                    key={idx}
                    className={styles.dropdown_item}
                    onClick={() => setSelectedModel(model)}
                  >
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.model_configurator__section_texture}>
            <div className={styles.model_configurator__texture_title}>
              Texture
            </div>

            <div className={styles.dropdown_container}>
              <div className={styles.dropdown_selected}>{selectedTexture}</div>

              <ul className={styles.dropdown_list}>
                {["Texture 1", "Texture 2", "Texture 3"].map((model, idx) => (
                  <li
                    key={idx}
                    className={styles.dropdown_item}
                    onClick={() => setSelectedTexture(model)}
                  >
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {isDesktop && (
        <div className={styles.model_configurator__desktop}>
          <div className={styles.model_configurator__desktop_section_model}>
            <div className={styles.model_configurator__desktop_title}>
              <span className={styles.model_configurator__desktop_title_label}>
                Selected Model :
              </span>
              <span className={styles.model_configurator__desktop_title_value}>
                {selectedModel}
              </span>
            </div>
            <div className={styles.model_configurator__desktop_values}>
              {["Model 1", "Model 2", "Model 3"].map((model, idx) => (
                <div
                  className={`${styles.desktop_item} ${
                    selectedModel === model ? styles.desktop_item_active : ""
                  }`}
                  key={idx}
                  onClick={() => setSelectedModel(model)}
                >
                  <div className={styles.desktop_item_label}>{model}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.model_configurator__desktop_section_texture}>
            <div className={styles.model_configurator__desktop_title}>
              <span className={styles.model_configurator__desktop_title_label}>
                Selected texture :
              </span>
              <span className={styles.model_configurator__desktop_title_value}>
                {selectedTexture}
              </span>
            </div>
            <div className={styles.model_configurator__desktop_values}>
              {["texture 1", "texture 2", "texture 3"].map((texture, idx) => (
                <div
                  className={`${styles.desktop_item} ${
                    selectedTexture === texture
                      ? styles.desktop_item_active
                      : ""
                  }`}
                  key={idx}
                  onClick={() => setSelectedTexture(texture)}
                >
                  <div className={styles.desktop_item_label}>{texture}</div>
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
