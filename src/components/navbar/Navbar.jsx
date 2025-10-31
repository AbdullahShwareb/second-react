import styles from './navbar.module.css';
import { Link } from 'react-router-dom'; // ✅ مهم جداً

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navDark}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          Start Bootstrap
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-uppercase fw-bold">
            <li className="nav-item">
              <Link className={`nav-link ${styles.active}`} to="/portfolio">
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/hero">
                Hero
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
