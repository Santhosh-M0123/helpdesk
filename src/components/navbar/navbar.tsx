import { useState } from "react";
import { type NavbarData } from "../../types/data/data";
import inBuiltstyles from "./Navbar.module.css";

interface NavbarProps {
  navBarData: NavbarData;
}

export default function Navbar({ navBarData }: NavbarProps) {
  const { logo, list, button, style } = navBarData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={style} className={inBuiltstyles.nav}>
      <div className={inBuiltstyles.logoContainer}>
        <img src={logo.url} alt={logo.label} style={{ height: "40px" }} />
        <span>{logo.label}</span>
      </div>

      <button 
        className={inBuiltstyles.toggleButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <ul className={`${inBuiltstyles.navMenu} ${isMenuOpen ? inBuiltstyles.showMenu : ''}`}>
        {list.map((element, index) => (
          <li key={index}>
            <a href={element.url}>{element.item}</a>
          </li>
        ))}
      </ul>
      
      <button 
        className={inBuiltstyles.actionButton}
        onClick={() => window.location.href = button.action} 
        style={button.style}
      >
        {button.label}
      </button>
    </nav>
  );
}