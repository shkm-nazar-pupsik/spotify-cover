import './App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button className="burger" onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}

      
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        
        
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        
        <div className="logo-container">
          <img src="/logo.png" alt="logo" className="logo" />
        </div>

        <nav className="nav-section">
          <p className="section-title">Menu</p>
          <ul className="nav-list">
            <li className="nav-item">
              <i className="far fa-user"></i> Profile
            </li>

            <li className="nav-item link-item">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <i className="fas fa-th-large"></i> Home
              </Link>
            </li>

            <li className="nav-item link-item">
              <Link to="/favorites" onClick={() => setMenuOpen(false)}>
                <i className="far fa-heart"></i> Favorite
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-section">
          <p className="section-title">Help</p>
          <ul className="nav-list">
            <li className="nav-item">
              <i className="fas fa-cog"></i> Settings
            </li>
            <li className="nav-item">
              <i className="far fa-question-circle"></i> FAQs
            </li>
          </ul>
        </nav>

        <div className="footer">
          <p className="version">Version 1.0.0</p>
        </div>
      </aside>
    </>
  )
}

export default Navigation

