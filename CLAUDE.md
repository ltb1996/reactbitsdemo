# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React application built with Vite using the default template structure:

- **Frontend Framework**: React 19.1.1 with JSX
- **Build Tool**: Vite 7.1.7 with @vitejs/plugin-react (uses Babel for Fast Refresh)
- **3D Graphics**: Three.js 0.180.0 for WebGL rendering
- **Linting**: ESLint 9.x with React-specific rules and hooks validation
- **Entry Point**: `src/main.jsx` renders the root `App` component
- **Main Component**: `src/App.jsx` - demo app with LiquidEther background
- **LiquidEther Component**: `src/LiquidEther.jsx` - WebGL fluid simulation component using Three.js
- **Styling**: CSS files (`src/App.css`, `src/index.css`, `src/LiquidEther.css`)
- **Assets**: Stored in `src/assets/` and `public/`

## LiquidEther Component

The `LiquidEther.jsx` component is a complex WebGL-based fluid dynamics simulation:

- Implements Navier-Stokes equations for realistic fluid behavior
- Uses multiple render targets (FBOs) for velocity, pressure, and divergence calculations
- Supports both interactive mouse/touch input and automatic demo mode
- Key simulation parameters:
  - `mouseForce`: Controls interaction strength
  - `resolution`: FBO resolution multiplier (affects performance)
  - `isViscous`: Enable/disable viscosity calculations
  - `autoDemo`: Automatic cursor movement when idle
  - `colors`: Array of hex colors for gradient palette
- Uses custom GLSL shaders for advection, pressure solving, and rendering
- Implements performance optimizations:
  - IntersectionObserver to pause when not visible
  - ResizeObserver for responsive canvas sizing
  - Device pixel ratio capping at 2x

## Code Conventions

- Uses JSX files (`.jsx` extension)
- ES modules with `import`/`export`
- React functional components with hooks
- ESLint enforces React hooks rules and refresh patterns
- Unused variables starting with capital letters or underscores are ignored by linting

## Key Configuration

- **Vite config**: Standard React plugin setup in `vite.config.js`
- **ESLint config**: Modern flat config format in `eslint.config.js` with React-specific rules
- **Package management**: npm with `package-lock.json`