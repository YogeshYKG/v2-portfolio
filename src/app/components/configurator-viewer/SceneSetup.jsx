"use client";

import {
  PresentationControls,
  Stage,
  Environment,
  Float,
} from "@react-three/drei";

import Arm_Chair__Furniture from "@/app/components/3d-models/Arm_Chair__Furniture";

const SceneSetup = ({
  scenePosition = [2, 0.2, 0],
  bgColor,
  rotationPosition,
}) => {
  return (
    <>
      {/* Desktop  */}
      {/* <group position={[2, 0.2, 0]}>   */}
      <group position={scenePosition}>
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
              <Arm_Chair__Furniture rotation={rotationPosition} />
            </Float>
          </Stage>
        </PresentationControls>

        {/* Optional extra environment for better reflections */}
        <Environment preset="city" background={false} />
      </group>
    </>
  );
};

export default SceneSetup;
