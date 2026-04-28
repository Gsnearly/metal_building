# Metal Building Configurator

This is the starter framework for a reusable 3D product configurator.

## What it does right now

- Shows a 3D metal building
- Lets you change width, length, and wall height
- Lets you change wall, roof, trim, and door colors
- Shows the active configuration as JSON
- Uses a reusable project structure so other products can be added later

## Tech stack

- React
- Vite
- Three.js
- React Three Fiber
- Drei
- Zustand

## Install

```bash
npm install
```

## Run

```bash
npm run dev
npm run dev -- --host 0.0.0.0
```

Then open the local URL Vite gives you.

Usually:

```txt
http://localhost:5173
```

## Main files

```txt
src/App.jsx
src/components/
src/scene/
src/store/
src/styles/main.css
```

## Next features to add

- Add door button
- Add window button
- Change roof style
- Move doors/windows around
- Validate impossible builds
- Price calculator
- Quote/save/export system
- Imported .glb assets for detailed doors and windows
```
