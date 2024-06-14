import {
  Cylinder,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
export const Experience = () => {
  return (
    <>
       <OrbitControls />
      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        color={"#9e69da"}
      />
      {/*Stage*/}
      <RigidBody
          colliders={false}
          type="fixed"
          position-y={-0.5}
          friction={2}
        >
          <CylinderCollider args={[1 / 2, 5]} />
          <Cylinder scale={[5, 1, 5]} receiveShadow>
            <meshStandardMaterial color="white" />
          </Cylinder>
        </RigidBody>
    </>
  );
};
