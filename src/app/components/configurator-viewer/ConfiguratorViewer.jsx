import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useModelCustomization } from "@/app/components/context/ModelCustomization";
import ArmChairScene from "@/app/components/configurator-viewer/scene-setup/ArmChairScene";
import SofaScene from "@/app/components/configurator-viewer/scene-setup/SofaScene";
import WinterJacketScene from "@/app/components/configurator-viewer/scene-setup/WinterJacketScene";

const ConfiguratorViewer = () => {
  const [bgColor, setBgColor] = useState("rgba(15, 23, 42, 1)");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const value = getComputedStyle(document.body)
      .getPropertyValue("--body-background")
      .trim();
    setBgColor(value);
  }, []);

  useEffect(() => {
    const value = getComputedStyle(document.body)
      .getPropertyValue("--body-background")
      .trim();
    setBgColor(value);

    const checkScreen = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { selectedModel, selectedTexture } = useModelCustomization();
  const rotationRef = useRef([0, 0, 0]);
  useEffect(() => {
    const newRotation = isDesktop
      ? selectedModel?.desktopRotation
      : selectedModel?.mobileRotation;

    if (newRotation) {
      rotationRef.current = newRotation;
    }
  }, [selectedModel, isDesktop]);

  return (
    <>
      {selectedModel?.modelId == 0 && (
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          key={selectedModel?.modelId}
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
      {selectedModel?.modelId == 1 && (
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          key={selectedModel?.modelId}
        >
          <color attach="background" args={[bgColor]} />
          <SofaScene bgColor={bgColor} isDesktop={isDesktop} />
        </Canvas>
      )}
      {selectedModel?.modelId == 2 && (
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          key={selectedModel?.modelId}
        >
          <color attach="background" args={[bgColor]} />
          <WinterJacketScene bgColor={bgColor} isDesktop={isDesktop} />
        </Canvas>
      )}
    </>
  );
};

export default ConfiguratorViewer;
