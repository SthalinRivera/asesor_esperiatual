import Link from "next/link";
import { useState } from "react";
import styles from "../index.module.css"
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.gradient_background}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${styles.text_gt}`} href="/">AsesorEspiritual</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="parafrasear">Parafrasear</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="q&a">Q&A</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="matriz_consistencia">Matriz consistencia</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="preguntas">Preguntas</a>
            </li>
            
          </ul>
          <a  className={styles.subrayado_none} href="#"> <button type="button" className={styles.bg_gt} >Contactanos</button></a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;