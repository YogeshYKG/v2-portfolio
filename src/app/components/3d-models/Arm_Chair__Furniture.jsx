import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useModelCustomization } from "../context/ModelCustomization";

const Arm_Chair__Furniture = ({ rotation, selectedTexture = 0 }) => {
  const { nodes, materials } = useGLTF(
    "/models/arm_chair__furniture/scene.gltf"
  );

  const { selectedColor } = useModelCustomization();

  let BASE_TEXTURE_PATH;
  let returnvalidpath;
  let textureProp;

  if (selectedTexture !== 0) {
    BASE_TEXTURE_PATH = `/texture/texture-00${selectedTexture}`;
    returnvalidpath = (file_without_extension) => {
      // check actual path
      if (selectedTexture != 0) {
        return `${file_without_extension}.png`;
      }
    };

    textureProp = useTexture({
      map: returnvalidpath(`${BASE_TEXTURE_PATH}/basecolor`),
      normalMap: returnvalidpath(`${BASE_TEXTURE_PATH}/normal`),
      roughnessMap: returnvalidpath(`${BASE_TEXTURE_PATH}/roughness`),
      aoMap: returnvalidpath(`${BASE_TEXTURE_PATH}/ambientOcclusion`),
    });
  }

  return (
    <group
      rotation={rotation}
      dispose={null}
      scale={1.6}
      // rotation={[-0.2, Math.PI + Math.PI / 12, 0.1]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {selectedTexture == 0 ? (
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Base}
              position={[0, 40.986, 0]}
              scale={43.314}
            />
          ) : (
            <>
              <mesh
                geometry={nodes.Object_6.geometry}
                position={[0, 40.986, 0]}
                scale={43.314}
              >
                {selectedColor?.colorId == 0 ? (
                  <meshStandardMaterial
                    map={selectedColor?.colorId == 0 ? textureProp?.map : null}
                    normalMap={textureProp.normalMap}
                    roughnessMap={textureProp.roughnessMap}
                    aoMap={textureProp.aoMap}
                  />
                ) : (
                  <meshStandardMaterial
                    color={
                      selectedColor?.colorId == 0 ? null : selectedColor?.hex
                    }
                    normalMap={textureProp.normalMap}
                    roughnessMap={textureProp.roughnessMap}
                    aoMap={textureProp.aoMap}
                  />
                )}
              </mesh>
            </>
          )}
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/arm_chair__furniture/scene.gltf");

export default Arm_Chair__Furniture;
