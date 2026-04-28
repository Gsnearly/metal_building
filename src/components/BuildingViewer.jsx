import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, Environment } from "@react-three/drei";
import BuildingModel from "../scene/BuildingModel.jsx";
import { useConfiguratorStore } from "../store/useConfiguratorStore.js";

export default function BuildingViewer() {
  const config = useConfiguratorStore((state) => state.config);

  return (
    <section className="viewer">
      <Canvas camera={{ position: [45, 35, 55], fov: 45 }} shadows>
        <color attach="background" args={["#111111"]} />

        <ambientLight intensity={0.6} />
        <directionalLight position={[30, 50, 20]} intensity={1.4} castShadow />
        <Environment preset="city" />

        <BuildingModel config={config} />

        <Grid
          args={[160, 160]}
          cellSize={5}
          sectionSize={20}
          position={[0, -0.02, 0]}
        />

        <OrbitControls makeDefault enableDamping />
      </Canvas>
    </section>
  );
}
