export const DEFAULT_CONFIG = {
  productType: "metal-building",

  dimensions: {
    width: 30,
    length: 40,
    height: 12,
  },

  colors: {
    roof: "#333333",
    walls: "#8a8a8a",
    trim: "#ffffff",
    doors: "#222222",
  },

  roof: {
    type: "gable",
    pitch: 4,
  },

  doors: [
    {
      id: "front-rollup-1",
      type: "rollup",
      wall: "front",
      x: 0,
      width: 10,
      height: 9,
    },
  ],

  windows: [
    {
      id: "left-window-1",
      wall: "left",
      x: -10,
      y: 5,
      width: 3,
      height: 3,
    },
  ],
};
