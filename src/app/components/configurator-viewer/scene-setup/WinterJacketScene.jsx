"use client";

import {
  PresentationControls,
  Stage,
  Environment,
  Float,
} from "@react-three/drei";

import Winter_Jacket from "@/app/components/3d-models/Winter_Jacket";

const WinterJacketScene = ({ rotation, isDesktop, selectedTexture }) => {
  return (
    <>
      <PresentationControls
        zoom={0.8}
        rotation={[0.1, Math.PI * 0.75, 0]} // nice starting angle
        polar={[-0.9, Math.PI / 4]} // limit up/down
        azimuth={[-Math.PI / 1.5, Math.PI / 1.5]} // limit left/right
      >
        <Stage
          intensity={0.6}
          preset="portrait"
          shadows={false}
          environment="city"
        >
          <Float
            speed={1}
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[0, 0.1]}
          >
            <Winter_Jacket key="jacket" />
          </Float>
        </Stage>
      </PresentationControls>

      <Environment preset="city" background={false} />
    </>
  );
};

export default WinterJacketScene;
