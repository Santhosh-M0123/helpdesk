import {
  Home,
  Settings,
  User,
  Info,
  Phone,
  type LucideProps,
} from "lucide-react";
import inBuiltstyles from "./sidebar.module.css";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import {type NavbarProps } from "../../types/data/data";

type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

const icons: Record<string, IconType> = {
  Home,
  Info,
  Phone,
  Settings,
  User,
};

export default function Sidebar({ navBarData, isCollapsed }: NavbarProps) {
  return (
    <div
      className={`${inBuiltstyles.sidebar} ${isCollapsed ? inBuiltstyles.collapsed : ''}`}
      style={{ backgroundColor: navBarData.style.backgroundColor }}
    >
      <nav className={inBuiltstyles.nav}>
        {navBarData.list.map((item) => {
          const Icon = icons[item.icon];

          return (
            <a
              key={item.url}
              href={item.url}
              className={inBuiltstyles.listItem}
              title={isCollapsed ? item.item : undefined}
            >
              {Icon && <Icon size={20} />}
              {!isCollapsed && <span className={inBuiltstyles.itemText}>{item.item}</span>}
            </a>
          );
        })}
      </nav>
    </div>
  );
}