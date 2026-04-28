import BuildingWalls from "./BuildingWalls.jsx";
import GableRoof from "./GableRoof.jsx";
import BuildingTrim from "./BuildingTrim.jsx";
import BuildingDoors from "./BuildingDoors.jsx";
import BuildingWindows from "./BuildingWindows.jsx";

export default function BuildingModel({ config }) {
  const { width, height } = config.dimensions;
  const roofHeight = Math.max(width * 0.16, 3);

  return (
    <group>
      <BuildingWalls
        width={config.dimensions.width}
        length={config.dimensions.length}
        height={config.dimensions.height}
        color={config.colors.walls}
      />

      <GableRoof
        width={config.dimensions.width}
        length={config.dimensions.length}
        height={config.dimensions.height}
        roofHeight={roofHeight}
        color={config.colors.roof}
      />

      <BuildingTrim
        width={config.dimensions.width}
        length={config.dimensions.length}
        height={height}
        roofHeight={roofHeight}
        color={config.colors.trim}
      />

      <BuildingDoors config={config} />
      <BuildingWindows config={config} />
    </group>
  );
}
