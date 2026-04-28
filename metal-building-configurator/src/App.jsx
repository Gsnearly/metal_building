import { Building2, RotateCcw } from "lucide-react";
import ConfiguratorSidebar from "./components/ConfiguratorSidebar.jsx";
import BuildingViewer from "./components/BuildingViewer.jsx";
import { useConfiguratorStore } from "./store/useConfiguratorStore.js";

export default function App() {
  const resetConfig = useConfiguratorStore((state) => state.resetConfig);

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <div className="brand-icon">
            <Building2 size={24} />
          </div>
          <div>
            <h1>Metal Building Configurator</h1>
            <p>Reusable 3D product configurator framework</p>
          </div>
        </div>

        <button className="reset-button" onClick={resetConfig}>
          <RotateCcw size={16} />
          Reset
        </button>
      </header>

      <main className="app-main">
        <ConfiguratorSidebar />
        <BuildingViewer />
      </main>
    </div>
  );
}
