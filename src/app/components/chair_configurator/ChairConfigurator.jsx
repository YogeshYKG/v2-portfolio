import React, { useEffect, useState } from "react";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";

const ChairConfigurator3d = () => {
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

  // ChairConfigurator3d.jsx
  const scenePosition = isDesktop ? [0, 0, 0] : [0, 0, 0]; // not working, use container instead
  const rotationPosition = isDesktop
    ? [-0.6, 3.7, 0]
    : [-0.2, Math.PI + Math.PI / 12, 0.1];

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <color attach="background" args={[bgColor]} />
      <Experience
        bgColor={bgColor}
        scenePosition={scenePosition}
        rotationPosition={rotationPosition}
      />
    </Canvas>
  );
};

export default ChairConfigurator3d;
