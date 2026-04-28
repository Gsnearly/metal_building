import RollupDoor from "./RollupDoor.jsx";

export default function BuildingDoors({ config }) {
  const { width, length } = config.dimensions;

  return (
    <group>
      {config.doors.map((door) => {
        if (door.wall === "front") {
          return (
            <RollupDoor
              key={door.id}
              position={[door.x, door.height / 2, length / 2 + 0.35]}
              rotation={[0, 0, 0]}
              width={door.width}
              height={door.height}
              color={config.colors.doors}
            />
          );
        }

        if (door.wall === "back") {
          return (
            <RollupDoor
              key={door.id}
              position={[door.x, door.height / 2, -length / 2 - 0.35]}
              rotation={[0, Math.PI, 0]}
              width={door.width}
              height={door.height}
              color={config.colors.doors}
            />
          );
        }

        if (door.wall === "left") {
          return (
            <RollupDoor
              key={door.id}
              position={[-width / 2 - 0.35, door.height / 2, door.x]}
              rotation={[0, Math.PI / 2, 0]}
              width={door.width}
              height={door.height}
              color={config.colors.doors}
            />
          );
        }

        if (door.wall === "right") {
          return (
            <RollupDoor
              key={door.id}
              position={[width / 2 + 0.35, door.height / 2, door.x]}
              rotation={[0, Math.PI / 2, 0]}
              width={door.width}
              height={door.height}
              color={config.colors.doors}
            />
          );
        }

        return null;
      })}
    </group>
  );
}