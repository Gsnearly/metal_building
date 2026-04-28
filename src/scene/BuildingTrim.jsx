export default function BuildingTrim({ width, length, height, roofHeight, color }) {
  return (
    <group>
      <mesh position={[0, height + roofHeight + 0.08, 0]} castShadow>
        <boxGeometry args={[0.35, 0.35, length + 2]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, 0.15, length / 2 + 0.25]} castShadow>
        <boxGeometry args={[width + 0.5, 0.3, 0.3]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, 0.15, -length / 2 - 0.25]} castShadow>
        <boxGeometry args={[width + 0.5, 0.3, 0.3]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[width / 2 + 0.25, 0.15, 0]} castShadow>
        <boxGeometry args={[0.3, 0.3, length + 0.5]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[-width / 2 - 0.25, 0.15, 0]} castShadow>
        <boxGeometry args={[0.3, 0.3, length + 0.5]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}
