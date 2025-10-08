# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React application built with Vite featuring a real-time WebGL fluid dynamics simulation:

- **Frontend Framework**: React 19.1.1 with JSX
- **Build Tool**: Vite 7.1.7 with @vitejs/plugin-react (uses Babel for Fast Refresh)
- **3D Graphics**: Three.js 0.180.0 for WebGL rendering
- **Animation**: Motion 12.23.22 library
- **Linting**: ESLint 9.x with flat config format, React hooks and refresh validation
- **Entry Point**: `src/main.jsx` renders the root `App` component in StrictMode
- **Main Component**: `src/App.jsx` - manages state for the fluid simulation and UI
- **LiquidEther Component**: `src/LiquidEther.jsx` - WebGL-based Navier-Stokes fluid simulation using Three.js
- **CustomizePanel Component**: `src/CustomizePanel.jsx` - slide-in control panel for adjusting simulation parameters in real-time
- **Styling**: Component-specific CSS files in `src/`

## LiquidEther Component

The `LiquidEther.jsx` component (~1150 lines) implements a sophisticated WebGL-based fluid dynamics simulation. Key architectural concepts:

### Fluid Simulation Architecture

- **Physics**: Implements Navier-Stokes equations using finite difference methods
- **Render Targets**: Uses ping-pong FBOs for velocity (vel_0, vel_1), viscosity (vel_viscous0, vel_viscous1), divergence (div), and pressure (pressure_0, pressure_1)
- **Simulation Pipeline**: Advection → External Force → Viscous (optional) → Divergence → Poisson Pressure Solve → Pressure Projection
- **GLSL Shaders**: Custom vertex/fragment shaders for each simulation step (advection_frag, divergence_frag, poisson_frag, pressure_frag, viscous_frag, color_frag)
- **BFECC**: Back and Forth Error Compensation and Correction for stable advection
- **Float Precision**: Uses HalfFloatType on iOS, FloatType on other devices

### Key Internal Classes

- `CommonClass`: Manages renderer, timing, and viewport dimensions
- `MouseClass`: Handles mouse/touch input with smooth takeover from auto-demo mode
- `AutoDriver`: Autonomous cursor movement system with configurable speed and smooth ramp-in
- `ShaderPass`: Base class for render passes
- `Advection`, `ExternalForce`, `Viscous`, `Divergence`, `Poisson`, `Pressure`: Simulation step classes
- `Simulation`: Orchestrates all simulation steps and FBO management
- `Output`: Renders final color visualization from velocity field
- `WebGLManager`: Top-level coordinator for animation loop, resize, and lifecycle

### Props and Parameters

- `mouseForce`: Interaction strength (default: 20)
- `cursorSize`: Cursor interaction radius (default: 100)
- `resolution`: FBO resolution multiplier, affects performance (default: 0.5)
- `isViscous`: Enable viscosity simulation (default: false)
- `viscous`: Viscosity coefficient (default: 30)
- `iterationsViscous`: Viscosity solver iterations (default: 32)
- `iterationsPoisson`: Pressure solver iterations (default: 32)
- `dt`: Time step for simulation (default: 0.014)
- `BFECC`: Enable BFECC advection (default: true)
- `isBounce`: Bounce off edges vs fade at boundaries (default: false)
- `colors`: Array of hex colors for velocity gradient (default: ['#5227FF', '#FF9FFC', '#B19EEF'])
- `autoDemo`: Enable automatic animation when idle (default: true)
- `autoSpeed`: Auto-demo cursor speed (default: 0.5)
- `autoIntensity`: Auto-demo force multiplier (default: 2.2)
- `takeoverDuration`: Smooth transition time from auto to manual control (default: 0.25s)
- `autoResumeDelay`: Delay before auto-demo resumes after interaction (default: 1000ms)
- `autoRampDuration`: Gradual intensity ramp-up for auto-demo (default: 0.6s)

### Performance Optimizations

- IntersectionObserver to pause rendering when component is not visible
- ResizeObserver for responsive canvas sizing with RAF debouncing
- Device pixel ratio capped at 2x to avoid excessive resolution
- Visibility change detection to pause when browser tab is hidden
- Efficient shader compilation and FBO reuse

## CustomizePanel Component

The `CustomizePanel.jsx` component provides a slide-in UI panel for real-time parameter adjustment:

- Three color palette presets with gradient preview buttons
- Range sliders for continuous parameters (mouseForce, cursorSize, resolution, autoSpeed, autoIntensity, pressure)
- Toggle switches for boolean parameters (isBounce, autoDemo, isViscous)
- Conditional rendering: viscous-related controls (viscous coefficient, iterationsViscous) only appear when `isViscous` is enabled
- All changes propagate immediately to the LiquidEther simulation via App state

## App State Management

The `App.jsx` component manages all simulation state at the top level and passes it down as props:

- State is lifted to App to enable CustomizePanel to control LiquidEther parameters
- All simulation parameters (colors, forces, resolution, auto-demo settings) are managed via `useState` hooks
- State setters are passed to CustomizePanel for user control
- LiquidEther receives parameters as props and syncs them via `useEffect` dependencies

## Code Conventions

- Uses `.jsx` file extension for all React components
- ES modules with `import`/`export`
- React functional components with hooks (no class components)
- ESLint config ignores unused variables starting with capital letters or underscores (e.g., `_onMouseMove`, `Common`)
- ESLint enforces React hooks dependency rules and fast refresh patterns

## Configuration Files

- **vite.config.js**: Standard Vite + React plugin setup
- **eslint.config.js**: Flat config format (ESLint 9.x) with React hooks and refresh validation
- **package.json**: npm scripts for dev, build, lint, preview
