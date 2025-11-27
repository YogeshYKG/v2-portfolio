import React from "react";
import { useGLTF } from "@react-three/drei";

const Winter_Jacket_default = (props) => {
  const { nodes, materials } = useGLTF("/models/winter_jacket/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 4]} scale={0.011}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials.Coat}
          />
          <mesh
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials.Coat}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/winter_jacket/scene.gltf");

export default Winter_Jacket_default;
