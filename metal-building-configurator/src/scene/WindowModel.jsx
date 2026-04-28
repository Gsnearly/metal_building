export default function WindowModel({ position, rotation, width, height }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh castShadow>
        <boxGeometry args={[width, height, 0.25]} />
        <meshStandardMaterial
          color="#7ec8ff"
          roughness={0.15}
          metalness={0.1}
          transparent
          opacity={0.75}
        />
      </mesh>

      <mesh position={[0, 0, 0.18]}>
        <boxGeometry args={[width + 0.3, 0.15, 0.18]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0, 0, 0.2]}>
        <boxGeometry args={[0.15, height + 0.3, 0.18]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}
