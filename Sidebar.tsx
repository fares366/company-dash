import type { ReactNode } from 'react';
import {
  LayoutDashboard, User, Search, FileText, Sparkles,
  MessageSquare, Bell, BarChart3, Sun, Moon, ChevronRight,
} from 'lucide-react';
import styles from './sidebar.module.css';
import utils from './utils.module.css';
import type { Page } from './dashmain';

interface NavItem {
  id: Page;
  label: string;
  icon: ReactNode;
  badge?: string;
  badgeRed?: boolean;
}

const navItems: NavItem[] = [
  { id: 'dashboard',     label: 'Dashboard',          icon: <LayoutDashboard size={16} /> },
  { id: 'profile',       label: 'My Profile',         icon: <User size={16} /> },
  { id: 'search',        label: 'Search Internships', icon: <Search size={16} /> },
  { id: 'applications',  label: 'Applications',       icon: <FileText size={16} />,      badge: '4' },
  { id: 'ai',            label: 'AI Recommendations', icon: <Sparkles size={16} />,      badge: '12' },
  { id: 'messages',      label: 'Messages',           icon: <MessageSquare size={16} />, badge: '3', badgeRed: true },
  { id: 'notifications', label: 'Notifications',      icon: <Bell size={16} />,          badge: '3', badgeRed: true },
  { id: 'analytics',     label: 'Profile Analytics',  icon: <BarChart3 size={16} /> },
];

interface Props {
  activePage: Page;
  onNavigate: (page: Page) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Sidebar({ activePage, onNavigate, theme, onToggleTheme }: Props) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>T</div>
        <div className={styles.logoText}>
          <span className={styles.logoName}>Ta3k</span>
          <span className={styles.logoSub}>Smart Internship Finder</span>
        </div>
      </div>

      <p className={styles.sectionLabel}>Student Portal</p>

      <nav className={styles.nav}>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`${styles.link} ${activePage === item.id ? styles.linkActive : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className={styles.linkLeft}>
              <span className={styles.linkIcon}>{item.icon}</span>
              <span className={styles.linkLabel}>{item.label}</span>
            </span>
            {item.badge && (
              <span className={`${utils.navBadge} ${item.badgeRed ? utils.badgeRed : utils.badgeTeal}`}>
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className={styles.bottom}>
        <button className={styles.themeToggle} onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          <span className={styles.themeToggleLabel}>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </span>
          <ChevronRight size={13} className={styles.themeToggleArrow} />
        </button>
        <div className={styles.user}>
          <div className={styles.avatar}>A</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>Amira Benali</span>
            <span className={styles.userRole}>M2 · Computer Science</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
