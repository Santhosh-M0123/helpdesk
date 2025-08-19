import inBuiltstyles from "./Navbar.module.css";
import {type NavbarProps } from "../../types/data/data";

export default function Navbar({ navBarData, isCollapsed, onToggleSidebar }: NavbarProps) {
  const { logo, button, style } = navBarData;

  return (
    <nav style={style} className={inBuiltstyles.nav}>
      <div className={inBuiltstyles.leftSection}>
        <button 
          className={inBuiltstyles.sidebarToggle}
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? '☰' : '✕'}
        </button>
        <div className={inBuiltstyles.logoContainer}>
          <img src={logo.url} alt={logo.label} className={inBuiltstyles.logo} />
          {!isCollapsed && <h1 className={inBuiltstyles.logoText}>{logo.label}</h1>}
        </div>
      </div>
      
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