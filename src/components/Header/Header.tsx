import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

type DropdownItem = {
    label: string;
    to: string;
};

const rushItems: DropdownItem[] = [
    { label: "Schedule", to: "/rush/schedule" },
    { label: "Events", to: "/rush/events" },
    { label: "FAQ", to: "/rush/faq" },
];

function classNames(...names: Array<string | false | undefined>) {
    return names.filter(Boolean).join(" ");
}

export default function Header() {
    const [rushOpen, setRushOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!dropdownRef.current) return;
            if (!dropdownRef.current.contains(e.target as Node)) {
                setRushOpen(false);
            }
        }
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* LEFT GROUP: logo */}
                <div className={styles.left}>
                    <NavLink to="/" className={styles.logo}>
                        Aden's KTP Rush Site
                    </NavLink>
                </div>

                {/* MIDDLE GROUP: main nav */}
                <nav className={styles.nav} aria-label="Primary">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            classNames(styles.link, isActive && styles.active)
                        }
                        end
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            classNames(styles.link, isActive && styles.active)
                        }
                    >
                        Portfolio
                    </NavLink>

                    {/* DROPDOWN SUBGROUP */}
                    <div className={styles.dropdown} ref={dropdownRef}>
                        <button
                            type="button"
                            className={classNames(styles.link, styles.dropdownButton)}
                            aria-haspopup="menu"
                            aria-expanded={rushOpen}
                            onClick={() => setRushOpen((v) => !v)}
                        >
                            Rush <span className={styles.caret}>▾</span>
                        </button>

                        {rushOpen && (
                            <div className={styles.menu} role="menu">
                                {rushItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        className={styles.menuItem}
                                        role="menuitem"
                                        onClick={() => setRushOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            classNames(styles.link, isActive && styles.active)
                        }
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* RIGHT GROUP: CTAs */}
                <div className={styles.right}>
                    <a className={classNames(styles.btn, styles.primary)} href="#apply">
                        Apply
                    </a>
                    <a className={classNames(styles.btn, styles.ghost)} href="#interest">
                        Interest Form
                    </a>
                </div>
            </div>
        </header>
    );
}

