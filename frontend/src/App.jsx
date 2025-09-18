import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import PillNav from './common/PillNav.jsx'
import LiquidEther from './common/LiquidEther.jsx'

function App() {
  const location = useLocation()
  return (
    <div className="app-root">
      <PillNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
      />
      <div style={{ width: '100%', height: 600, position: 'relative' }}>
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
  />
</div>
      {/* <main>
        <Outlet />
      </main> */}
    </div>
  )
}

export default App


// import PillNav from './PillNav';
// import logo from '/path/to/logo.svg';

// <PillNav
//   logo={logo}
//   logoAlt="Company Logo"
//   items={[
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '/about' },
//     { label: 'Services', href: '/services' },
//     { label: 'Contact', href: '/contact' }
//   ]}
//   activeHref="/"
//   className="custom-nav"
//   ease="power2.easeOut"
//   baseColor="#000000"
//   pillColor="#ffffff"
//   hoveredPillTextColor="#ffffff"
//   pillTextColor="#000000"
// />