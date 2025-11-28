"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import { useModelCustomization } from "@/app/components/context/ModelCustomization";

import ArmChairScene from "@/app/components/configurator-viewer/scene-setup/ArmChairScene";
import SofaScene from "@/app/components/configurator-viewer/scene-setup/SofaScene";
import WinterJacketScene from "@/app/components/configurator-viewer/scene-setup/WinterJacketScene";

const ConfiguratorViewer = () => {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState("rgba(15, 23, 42, 1)");
  const [isDesktop, setIsDesktop] = useState(false);

  const { modelList, textureList, selectedTexture } = useModelCustomization();

  // ------------------------------------------------
  // 1️⃣ Get model from URL (not from context)
  // ------------------------------------------------
  const slug = pathname.split("/")[2]; // /3d-configurator/arm-chair → arm-chair
  const urlModel = modelList.find((m) => m.slug === slug);

  // ------------------------------------------------
  // UI helpers
  // ------------------------------------------------
  useEffect(() => {
    const value = getComputedStyle(document.body)
      .getPropertyValue("--body-background")
      .trim();

    setBgColor(value);
  }, []);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth > 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ------------------------------------------------
  // Rotation handling based on URL model
  // ------------------------------------------------
  const rotationRef = useRef([0, 0, 0]);

  useEffect(() => {
    if (!urlModel) return;

    const newRotation = isDesktop
      ? urlModel.desktopRotation
      : urlModel.mobileRotation;

    if (newRotation) {
      rotationRef.current = newRotation;
    }
  }, [urlModel, isDesktop]);

  if (!urlModel) return null; // if wrong slug or loading

  // ------------------------------------------------
  // Render Scene based on modelId from URL model
  // ------------------------------------------------
  return (
    <>
      {urlModel.modelId === 0 && (
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          key={urlModel.modelId}
        >
          <color attach="background" args={[bgColor]} />

          <ArmChairScene
            bgColor={bgColor}
            isDesktop={isDesktop}
            rotation={rotationRef.current}
            selectedTexture={selectedTexture?.textureId}
          />
        </Canvas>
      )}

      {urlModel.modelId === 1 && (
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          key={urlModel.modelId}
        >
          <color attach="background" args={[bgColor]} />
          <SofaScene bgColor={bgColor} isDesktop={isDesktop} />
        </Canvas>
      )}

      {urlModel.modelId === 2 && (
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          key={urlModel.modelId}
        >
          <color attach="background" args={[bgColor]} />
          <WinterJacketScene
            bgColor={bgColor}
            isDesktop={isDesktop}
            rotation={rotationRef.current}
            selectedTexture={selectedTexture?.textureId}
          />
        </Canvas>
      )}
    </>
  );
};

export default ConfiguratorViewer;
