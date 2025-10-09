import { useNavigate } from 'react-router-dom'
import LiquidEther from './LiquidEther'
import CardSwap, { Card } from './CardSwap'
import './GetStarted.css'

function GetStarted() {
  const navigate = useNavigate()

  return (
    <div className="getstarted-container">
      <div className="background-layer">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>

      <div className="content-layer">
        <header className="header">
          <div className="logo-container" onClick={() => navigate('/')}>
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="logo-text">React Bits</span>
          </div>
          <nav className="nav">
            <button className="nav-button" onClick={() => navigate('/')}>Home</button>
            <button className="nav-button">Docs</button>
          </nav>
        </header>

        <main className="getstarted-main">
          <div className="getstarted-content">
            <h1 className="getstarted-title">Get Started with React Bits</h1>
            <p className="getstarted-description">
              Explore our collection of interactive components and animations. Each card below showcases a unique feature you can integrate into your projects.
            </p>
          </div>

          <div className="card-swap-wrapper">
            <CardSwap
              width={500}
              height={400}
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <div className="card-content">
                  <div className="card-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Fluid Simulation</h3>
                  <p className="card-text">Real-time WebGL fluid dynamics using Navier-Stokes equations</p>
                  <ul className="card-features">
                    <li>Interactive mouse controls</li>
                    <li>Customizable colors</li>
                    <li>Performance optimized</li>
                  </ul>
                </div>
              </Card>
              <Card>
                <div className="card-content">
                  <div className="card-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Chroma Grid</h3>
                  <p className="card-text">Dynamic grid with spotlight effects and smooth animations</p>
                  <ul className="card-features">
                    <li>Mouse tracking effects</li>
                    <li>Grayscale filters</li>
                    <li>Responsive layout</li>
                  </ul>
                </div>
              </Card>
              <Card>
                <div className="card-content">
                  <div className="card-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Blur Text Animation</h3>
                  <p className="card-text">Smooth text reveal with blur and motion effects</p>
                  <ul className="card-features">
                    <li>Word or character animation</li>
                    <li>Customizable timing</li>
                    <li>Loop support</li>
                  </ul>
                </div>
              </Card>
            </CardSwap>
          </div>
        </main>
      </div>
    </div>
  )
}

export default GetStarted
