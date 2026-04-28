import { SlidersHorizontal, Plus, Trash2 } from "lucide-react";
import ControlGroup from "./ControlGroup.jsx";
import NumberControl from "./NumberControl.jsx";
import ColorControl from "./ColorControl.jsx";
import { useConfiguratorStore } from "../store/useConfiguratorStore.js";

export default function ConfiguratorSidebar() {
  const config = useConfiguratorStore((state) => state.config);
  const updateDimension = useConfiguratorStore((state) => state.updateDimension);
  const updateColor = useConfiguratorStore((state) => state.updateColor);
  const addDoor = useConfiguratorStore((state) => state.addDoor);
  const removeDoor = useConfiguratorStore((state) => state.removeDoor);
  const updateDoor = useConfiguratorStore((state) => state.updateDoor);

  return (
    <aside className="sidebar">
      <section className="panel">
        <div className="panel-title">
          <SlidersHorizontal size={20} />
          <h2>Building Options</h2>
        </div>

        <ControlGroup title="Dimensions">
          <NumberControl
            label="Width"
            value={config.dimensions.width}
            min={10}
            max={100}
            suffix="ft"
            onChange={(value) => updateDimension("width", value)}
          />

          <NumberControl
            label="Length"
            value={config.dimensions.length}
            min={10}
            max={100}
            suffix="ft"
            onChange={(value) => updateDimension("length", value)}
          />

          <NumberControl
            label="Wall Height"
            value={config.dimensions.height}
            min={8}
            max={24}
            suffix="ft"
            onChange={(value) => updateDimension("height", value)}
          />
        </ControlGroup>

        <ControlGroup title="Colors">
          <ColorControl
            label="Wall Color"
            value={config.colors.walls}
            onChange={(value) => updateColor("walls", value)}
          />

          <ColorControl
            label="Roof Color"
            value={config.colors.roof}
            onChange={(value) => updateColor("roof", value)}
          />

          <ColorControl
            label="Trim Color"
            value={config.colors.trim}
            onChange={(value) => updateColor("trim", value)}
          />

          <ColorControl
            label="Door Color"
            value={config.colors.doors}
            onChange={(value) => updateColor("doors", value)}
          />
        </ControlGroup>

        <ControlGroup title="Doors">
          <button className="add-button" onClick={addDoor}>
            <Plus size={16} />
            Add Roll-Up Door
          </button>

          <div className="item-list">
            {config.doors.map((door, index) => {
              const maxPosition =
                door.wall === "front" || door.wall === "back"
                  ? config.dimensions.width / 2 - door.width / 2
                  : config.dimensions.length / 2 - door.width / 2;

              return (
                <div className="config-item vertical" key={door.id}>
                  <div className="config-item-header">
                    <div>
                      <strong>Door {index + 1}</strong>
                      <span>
                        {door.width}ft × {door.height}ft — {door.wall}
                      </span>
                    </div>

                    <button
                      className="delete-button"
                      onClick={() => removeDoor(door.id)}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <label className="mini-control">
                    Wall
                    <select
                      value={door.wall}
                      onChange={(event) =>
                        updateDoor(door.id, {
                          wall: event.target.value,
                          x: 0,
                        })
                      }
                    >
                      <option value="front">Front</option>
                      <option value="back">Back</option>
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                    </select>
                  </label>

                  <label className="mini-control">
                    Position
                    <input
                      type="range"
                      min={-maxPosition}
                      max={maxPosition}
                      step="1"
                      value={door.x}
                      onChange={(event) =>
                        updateDoor(door.id, {
                          x: Number(event.target.value),
                        })
                      }
                    />
                    <span>{door.x} ft</span>
                  </label>

                  <label className="mini-control">
                    Width
                    <input
                      type="range"
                      min="6"
                      max="16"
                      step="1"
                      value={door.width}
                      onChange={(event) =>
                        updateDoor(door.id, {
                          width: Number(event.target.value),
                        })
                      }
                    />
                    <span>{door.width} ft</span>
                  </label>

                  <label className="mini-control">
                    Height
                    <input
                      type="range"
                      min="7"
                      max={config.dimensions.height - 1}
                      step="1"
                      value={door.height}
                      onChange={(event) =>
                        updateDoor(door.id, {
                          height: Number(event.target.value),
                        })
                      }
                    />
                    <span>{door.height} ft</span>
                  </label>
                </div>
              );
            })}
          </div>
        </ControlGroup>

        <ControlGroup title="Current Configuration JSON">
          <pre className="json-box">{JSON.stringify(config, null, 2)}</pre>
        </ControlGroup>
      </section>
    </aside>
  );
}
