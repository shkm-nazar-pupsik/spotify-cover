import './App.css'

function Navigation() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <i className="fas fa-bars-staggered"></i>
        <span>Music 1</span>
      </div>

      <nav className="nav-section">
        <p className="section-title">Menu</p>
        <ul className="nav-list">
          <li className="nav-item">
            <i className="far fa-user"></i> Profile
          </li>
          <li className="nav-item active">
            <i className="fas fa-th-large"></i> Home
          </li>
          <li className="nav-item">
            <i className="far fa-heart"></i> Favorite
          </li>-
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
