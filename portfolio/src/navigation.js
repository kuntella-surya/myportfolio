import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './nav.css';

function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="nav-logo">Surya</div>
        
      <div className="nav-links">
         <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>
      </div>
    </nav>
  );
}

function Routing() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Routing;