export interface NavbarLink {
    item: string;
    url: string;
    icon: string;
}

export interface NavButton {
    label: string;
    action: string;
    style: NavButtonStyle;
}

export interface NavButtonStyle {
    backgroundColor: string;
    color: string;
    borderRadius: string;
    padding: string;
    border: string;
    cursor: string;
}

export interface NavbarStyle {
    backgroundColor: string;
    color: string;
    fontFamily: string;
}

export interface NavbarData {
  logo: {
    url: string;
    label: string;
  };
  list: NavbarLink[];
  button: NavButton;
  style: NavbarStyle;
}

export interface NavbarProps {
  navBarData: NavbarData;
  isCollapsed: boolean;
  onToggleSidebar: () => void;
}

export interface AppData {
  Navbar?: NavbarData;
  milkdown?: Milkdown;
}

export interface Milkdown {
  data: string;
}