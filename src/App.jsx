import { useState } from 'react'
import LiquidEther from './LiquidEther'
import CustomizePanel from './CustomizePanel'
import BlurText from './BlurText'
import './App.css'

function App() {
  const [showPanel, setShowPanel] = useState(false)
  const [colors, setColors] = useState(['#5227FF', '#FF9FFC', '#B19EEF'])
  const [mouseForce, setMouseForce] = useState(20)
  const [cursorSize, setCursorSize] = useState(100)
  const [resolution, setResolution] = useState(0.5)
  const [autoSpeed, setAutoSpeed] = useState(0.5)
  const [autoIntensity, setAutoIntensity] = useState(2.2)
  const [pressure, setPressure] = useState(32)
  const [isBounce, setIsBounce] = useState(false)
  const [autoDemo, setAutoDemo] = useState(true)
  const [isViscous, setIsViscous] = useState(false)
  const [viscous, setViscous] = useState(30)
  const [iterationsViscous, setIterationsViscous] = useState(32)

  const handleAnimationComplete = () => {
    console.log('Title animation completed!')
  }

  return (
    <div className="app-container">
      <div className="background-layer">
        <LiquidEther
          colors={colors}
          mouseForce={mouseForce}
          cursorSize={cursorSize}
          isViscous={isViscous}
          viscous={viscous}
          iterationsViscous={iterationsViscous}
          iterationsPoisson={pressure}
          resolution={resolution}
          isBounce={isBounce}
          autoDemo={autoDemo}
          autoSpeed={autoSpeed}
          autoIntensity={autoIntensity}
          takeoverDuration={0.25}
          autoResumeDelay={100}
          autoRampDuration={0.6}
        />
      </div>

      <div className="content-layer">
        <header className="header">
          <div className="logo-container">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="logo-text">React Bits</span>
          </div>
          <nav className="nav">
            <button className="nav-button">Home</button>
            <button className="nav-button">Docs</button>
          </nav>
        </header>

        <main className="main-content">
          <div className="badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
            </svg>
            New Background
          </div>
          <BlurText
            text="The web, made fluid at your fingertips."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="title"
            loop={true}
            loopDelay={1000}
          />

          <div className="button-group">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </main>

        <button
          className="toggle-panel-button"
          onClick={() => setShowPanel(!showPanel)}
        >
          Demo Content
        </button>
      </div>

      <CustomizePanel
        show={showPanel}
        onClose={() => setShowPanel(false)}
        colors={colors}
        setColors={setColors}
        mouseForce={mouseForce}
        setMouseForce={setMouseForce}
        cursorSize={cursorSize}
        setCursorSize={setCursorSize}
        resolution={resolution}
        setResolution={setResolution}
        autoSpeed={autoSpeed}
        setAutoSpeed={setAutoSpeed}
        autoIntensity={autoIntensity}
        setAutoIntensity={setAutoIntensity}
        pressure={pressure}
        setPressure={setPressure}
        isBounce={isBounce}
        setIsBounce={setIsBounce}
        autoDemo={autoDemo}
        setAutoDemo={setAutoDemo}
        isViscous={isViscous}
        setIsViscous={setIsViscous}
        viscous={viscous}
        setViscous={setViscous}
        iterationsViscous={iterationsViscous}
        setIterationsViscous={setIterationsViscous}
      />
    </div>
  )
}

export default App