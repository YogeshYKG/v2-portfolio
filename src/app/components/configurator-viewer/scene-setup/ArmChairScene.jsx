"use client";

import {
  PresentationControls,
  Stage,
  Environment,
  Float,
} from "@react-three/drei";

import Arm_Chair__Furniture from "@/app/components/3d-models/Arm_Chair__Furniture";
import Arm_Chair__Furniture_default from "@/app/components/3d-models/Arm_Chair__Furniture_default";
import { useModelCustomization } from "@/app/components/context/ModelCustomization";
import { useEffect, useRef, useState } from "react";

const ArmChairScene = ({ rotation, isDesktop, selectedTexture }) => {
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
            {selectedTexture != 0 && (
              <Arm_Chair__Furniture
                key={`armchair-${selectedTexture}`}
                rotation={rotation}
                selectedTexture={selectedTexture}
              />
            )}
            {selectedTexture == 0 && (
              <Arm_Chair__Furniture_default
                key="armchair-default"
                rotation={rotation}
              />
            )}
          </Float>
        </Stage>
      </PresentationControls>

      <Environment preset="city" background={false} />
    </>
  );
};

export default ArmChairScene;
