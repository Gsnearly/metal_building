export default function RollupDoor({ x, z, width, height, color }) {
  return (
    <group position={[x, height / 2, z]}>
      <mesh castShadow>
        <boxGeometry args={[width, height, 0.35]} />
        <meshStandardMaterial color={color} roughness={0.4} />
      </mesh>

      {Array.from({ length: 7 }).map((_, index) => (
        <mesh key={index} position={[0, -height / 2 + index * (height / 7), 0.2]}>
          <boxGeometry args={[width + 0.1, 0.07, 0.08]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}
