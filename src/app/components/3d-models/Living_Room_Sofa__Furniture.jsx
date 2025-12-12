import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useModelCustomization } from "../context/ModelCustomization";

const Living_Room_Sofa__Furniture = ({ selectedTexture }) => {
  const { nodes, materials } = useGLTF(
    "/models/living_room_sofa__furniture/scene.gltf"
  );

  const { selectedColor, selectedColor_varient1, selectedColor_varient2 } =
    useModelCustomization();

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
    <group dispose={null}>
      <group position={[1, 25.469, -0.315]} scale={13} rotation={[0, 4, 0]}>
        <mesh geometry={nodes.Object_6.geometry}>
          {/* Legs  */}
          {selectedColor?.colorId == 0 ? (
            <meshStandardMaterial
              map={textureProp?.map}
              normalMap={textureProp.normalMap}
              roughnessMap={textureProp.roughnessMap}
              aoMap={textureProp.aoMap}
            />
          ) : (
            <meshStandardMaterial
              color={selectedColor?.colorId == 0 ? null : selectedColor?.hex}
              normalMap={textureProp.normalMap}
              roughnessMap={textureProp.roughnessMap}
              aoMap={textureProp.aoMap}
            />
          )}
        </mesh>
        <mesh geometry={nodes.Object_8.geometry} material={materials.Fabric}>
          {/* Fabric  */}
          {selectedColor_varient1?.colorId == 0 ? (
            <meshStandardMaterial
              map={textureProp?.map}
              normalMap={textureProp.normalMap}
              roughnessMap={textureProp.roughnessMap}
              aoMap={textureProp.aoMap}
            />
          ) : (
            <meshStandardMaterial
              color={selectedColor_varient1?.colorId == 0 ? null : selectedColor_varient1?.hex}
              normalMap={textureProp.normalMap}
              roughnessMap={textureProp.roughnessMap}
              aoMap={textureProp.aoMap}
            />
          )}
        </mesh>
        <mesh geometry={nodes.Object_10.geometry}>
          <meshStandardMaterial
            map={textureProp?.map}
            normalMap={textureProp.normalMap}
            roughnessMap={textureProp.roughnessMap}
            aoMap={textureProp.aoMap}
          />
        </mesh>
        <mesh geometry={nodes.Object_12.geometry}>
          {/* armPit  */}
          {selectedColor_varient2?.colorId == 0 ? (
            <meshStandardMaterial
              map={textureProp?.map}
              normalMap={textureProp.normalMap}
              roughnessMap={textureProp.roughnessMap}
              aoMap={textureProp.aoMap}
            />
          ) : (
            <meshStandardMaterial
              color={selectedColor_varient2?.colorId == 0 ? null : selectedColor_varient2?.hex}
              normalMap={textureProp.normalMap}
              roughnessMap={textureProp.roughnessMap}
              aoMap={textureProp.aoMap}
            />
          )}
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload("/models/living_room_sofa__furniture/scene.gltf");

export default Living_Room_Sofa__Furniture;
