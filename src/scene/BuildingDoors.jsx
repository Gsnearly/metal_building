import RollupDoor from "./RollupDoor.jsx";

export default function BuildingDoors({ config }) {
  const { length } = config.dimensions;

  return (
    <group>
      {config.doors.map((door) => {
        if (door.wall === "front") {
          return (
            <RollupDoor
              key={door.id}
              x={door.x}
              z={length / 2 + 0.35}
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
              x={door.x}
              z={-length / 2 - 0.35}
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
