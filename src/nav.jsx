import './App.css'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src="./public/logo.png" alt="" className="logo" />
      </div>

      <nav className="nav-section">
        <p className="section-title">Menu</p>
        <ul className="nav-list">
          <li className="nav-item">
            <i className="far fa-user"></i> Profile
          </li>
          <li className="nav-item">
            <Link to="/">
              <i className="fas fa-th-large"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites">
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
  )
}

export default Navigation
