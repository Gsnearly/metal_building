export default function GableEnd({ width, height, roofHeight, z, color }) {
  const vertices = new Float32Array([
    -width / 2,
    height,
    z,
    0,
    height + roofHeight,
    z,
    width / 2,
    height,
    z,
  ]);

  return (
    <mesh castShadow receiveShadow>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[vertices, 3]} />
      </bufferGeometry>
      <meshStandardMaterial color={color} roughness={0.55} side={2} />
    </mesh>
  );
}
