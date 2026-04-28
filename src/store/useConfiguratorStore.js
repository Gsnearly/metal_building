import { create } from "zustand";
import { DEFAULT_CONFIG } from "./defaultConfig.js";

function clampNumber(value, min, max) {
  return Math.min(Math.max(Number(value), min), max);
}

export const useConfiguratorStore = create((set) => ({
  config: structuredClone(DEFAULT_CONFIG),

  updateDimension: (key, value) =>
    set((state) => ({
      config: {
        ...state.config,
        dimensions: {
          ...state.config.dimensions,
          [key]: clampNumber(
            value,
            key === "height" ? 8 : 10,
            key === "height" ? 24 : 100
          ),
        },
      },
    })),

  updateColor: (key, value) =>
    set((state) => ({
      config: {
        ...state.config,
        colors: {
          ...state.config.colors,
          [key]: value,
        },
      },
    })),

  addDoor: () =>
    set((state) => ({
      config: {
        ...state.config,
        doors: [
          ...state.config.doors,
          {
            id: `door-${Date.now()}`,
            type: "rollup",
            wall: "front",
            x: 0,
            width: 10,
            height: 9,
          },
        ],
      },
    })),

  removeDoor: (id) =>
    set((state) => ({
      config: {
        ...state.config,
        doors: state.config.doors.filter((door) => door.id !== id),
      },
    })),

  resetConfig: () =>
    set({
      config: structuredClone(DEFAULT_CONFIG),
    }),
}));
