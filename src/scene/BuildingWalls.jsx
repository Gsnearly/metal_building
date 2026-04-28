export default function BuildingWalls({ width, length, height, color }) {
  const wallThickness = 0.25;

  return (
    <group>
      <mesh position={[0, height / 2, length / 2]} castShadow receiveShadow>
        <boxGeometry args={[width, height, wallThickness]} />
        <meshStandardMaterial color={color} roughness={0.65} />
      </mesh>

      <mesh position={[0, height / 2, -length / 2]} castShadow receiveShadow>
        <boxGeometry args={[width, height, wallThickness]} />
        <meshStandardMaterial color={color} roughness={0.65} />
      </mesh>

      <mesh position={[width / 2, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[wallThickness, height, length]} />
        <meshStandardMaterial color={color} roughness={0.65} />
      </mesh>

      <mesh position={[-width / 2, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[wallThickness, height, length]} />
        <meshStandardMaterial color={color} roughness={0.65} />
      </mesh>
    </group>
  );
}
