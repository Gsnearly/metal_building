import GableEnd from "./GableEnd.jsx";

export default function GableRoof({ width, length, height, roofHeight, color }) {
  const roofAngle = Math.atan2(roofHeight, width / 2);
  const roofPanelLength = Math.sqrt((width / 2) ** 2 + roofHeight ** 2);

  return (
    <group>
      <mesh
        position={[-width / 4, height + roofHeight / 2, 0]}
        rotation={[0, 0, roofAngle]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[roofPanelLength, 0.35, length + 1.5]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>

      <mesh
        position={[width / 4, height + roofHeight / 2, 0]}
        rotation={[0, 0, -roofAngle]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[roofPanelLength, 0.35, length + 1.5]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>

      <GableEnd
        width={width}
        height={height}
        roofHeight={roofHeight}
        z={length / 2 + 0.14}
        color={color}
      />

      <GableEnd
        width={width}
        height={height}
        roofHeight={roofHeight}
        z={-length / 2 - 0.14}
        color={color}
      />
    </group>
  );
}
