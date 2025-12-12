import React from "react";
import { useGLTF } from "@react-three/drei";

const Living_Room_Sofa__Furniture_default = (props) => {
  const { nodes, materials } = useGLTF("/models/living_room_sofa__furniture/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[1, 25.469, -0.315]} scale={13} rotation={[0, 4, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Fabric} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Base} />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.Leather}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/living_room_sofa__furniture/scene.gltf");

export default Living_Room_Sofa__Furniture_default;
