import './CustomizePanel.css'

const colorPresets = [
  ['#5227FF', '#FF9FFC', '#B19EEF'],
  ['#FF6B9D', '#C06C84', '#F67280'],
  ['#A8E6CF', '#DCEDC1', '#FFD3B6']
]

export default function CustomizePanel({
  show,
  colors,
  setColors,
  mouseForce,
  setMouseForce,
  cursorSize,
  setCursorSize,
  resolution,
  setResolution,
  autoSpeed,
  setAutoSpeed,
  autoIntensity,
  setAutoIntensity,
  pressure,
  setPressure,
  isBounce,
  setIsBounce,
  autoDemo,
  setAutoDemo,
  isViscous,
  setIsViscous,
  viscous,
  setViscous,
  iterationsViscous,
  setIterationsViscous,
  onClose
}) {
  return (
    <div className={`customize-panel ${show ? 'show' : ''}`}>
      <div className="panel-content">
        <div className="panel-header">
          <h2 className="panel-title">Customize</h2>
          <button className="close-button" onClick={onClose} aria-label="Close panel">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="control-group">
          <label className="control-label">Colors</label>
          <div className="color-presets">
            {colorPresets.map((preset, index) => (
              <button
                key={index}
                className={`color-preset ${JSON.stringify(preset) === JSON.stringify(colors) ? 'active' : ''}`}
                onClick={() => setColors(preset)}
                style={{
                  background: `linear-gradient(135deg, ${preset[0]}, ${preset[1]}, ${preset[2]})`
                }}
              />
            ))}
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">
            <span>Mouse Force</span>
            <span className="control-value">{mouseForce}</span>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={mouseForce}
            onChange={(e) => setMouseForce(Number(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label className="control-label">
            <span>Cursor Size</span>
            <span className="control-value">{cursorSize}</span>
          </label>
          <input
            type="range"
            min="10"
            max="200"
            value={cursorSize}
            onChange={(e) => setCursorSize(Number(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label className="control-label">
            <span>Resolution</span>
            <span className="control-value">{resolution.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={resolution}
            onChange={(e) => setResolution(Number(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label className="control-label">
            <span>Auto Speed</span>
            <span className="control-value">{autoSpeed.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={autoSpeed}
            onChange={(e) => setAutoSpeed(Number(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label className="control-label">
            <span>Auto Intensity</span>
            <span className="control-value">{autoIntensity.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={autoIntensity}
            onChange={(e) => setAutoIntensity(Number(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label className="control-label">
            <span>Pressure</span>
            <span className="control-value">{pressure}</span>
          </label>
          <input
            type="range"
            min="1"
            max="64"
            value={pressure}
            onChange={(e) => setPressure(Number(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label className="toggle-label">
            <span>Bounce Edges</span>
            <button
              className={`toggle ${isBounce ? 'active' : ''}`}
              onClick={() => setIsBounce(!isBounce)}
            >
              <span className="toggle-slider" />
            </button>
          </label>
        </div>

        <div className="control-group">
          <label className="toggle-label">
            <span>Auto Animate</span>
            <button
              className={`toggle ${autoDemo ? 'active' : ''}`}
              onClick={() => setAutoDemo(!autoDemo)}
            >
              <span className="toggle-slider" />
            </button>
          </label>
        </div>

        <div className="control-group">
          <label className="toggle-label">
            <span>Viscous</span>
            <button
              className={`toggle ${isViscous ? 'active' : ''}`}
              onClick={() => setIsViscous(!isViscous)}
            >
              <span className="toggle-slider" />
            </button>
          </label>
        </div>

        {isViscous && (
          <>
            <div className="control-group">
              <label className="control-label">
                <span>Viscous Coef</span>
                <span className="control-value">{viscous}</span>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={viscous}
                onChange={(e) => setViscous(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="control-group">
              <label className="control-label">
                <span>Viscous Iterations</span>
                <span className="control-value">{iterationsViscous}</span>
              </label>
              <input
                type="range"
                min="1"
                max="64"
                value={iterationsViscous}
                onChange={(e) => setIterationsViscous(Number(e.target.value))}
                className="slider"
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}