import WindowModel from "./WindowModel.jsx";

export default function BuildingWindows({ config }) {
  const { width, length } = config.dimensions;

  return (
    <group>
      {config.windows.map((windowItem) => {
        if (windowItem.wall === "left") {
          return (
            <WindowModel
              key={windowItem.id}
              position={[-width / 2 - 0.35, windowItem.y, windowItem.x]}
              rotation={[0, Math.PI / 2, 0]}
              width={windowItem.width}
              height={windowItem.height}
            />
          );
        }

        if (windowItem.wall === "right") {
          return (
            <WindowModel
              key={windowItem.id}
              position={[width / 2 + 0.35, windowItem.y, windowItem.x]}
              rotation={[0, Math.PI / 2, 0]}
              width={windowItem.width}
              height={windowItem.height}
            />
          );
        }

        if (windowItem.wall === "front") {
          return (
            <WindowModel
              key={windowItem.id}
              position={[windowItem.x, windowItem.y, length / 2 + 0.35]}
              rotation={[0, 0, 0]}
              width={windowItem.width}
              height={windowItem.height}
            />
          );
        }

        return null;
      })}
    </group>
  );
}
