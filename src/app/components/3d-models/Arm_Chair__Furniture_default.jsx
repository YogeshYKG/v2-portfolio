import React from "react";
import { useGLTF } from "@react-three/drei";

const Arm_Chair__Furniture_default = ({ rotation }) => {
  const { nodes, materials } = useGLTF(
    "/models/arm_chair__furniture/scene.gltf"
  );

  return (
    <group
      rotation={rotation}
      dispose={null}
      scale={1.6}
      // rotation={[-0.2, Math.PI + Math.PI / 12, 0.1]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Base}
            position={[0, 40.986, 0]}
            scale={43.314}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/arm_chair__furniture/scene.gltf");

export default Arm_Chair__Furniture_default;
