"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navigation } from "@/data/site";

function isActiveItem(item, pathname) {
  const selfActive = item.href
    ? item.href === "/"
      ? pathname === "/"
      : pathname.startsWith(item.href)
    : false;

  const childActive = item.children?.some((child) => isActiveItem(child, pathname)) ?? false;
  return selfActive || childActive;
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const menuToggleRef = useRef(null);

  const syncMobileMenuState = () => {
    const isOpen = menuToggleRef.current?.open ?? false;
    document.body.classList.toggle("mobile-menu-open", isOpen);
  };

  const closeAllMenus = () => {
    if (!headerRef.current) {
      return;
    }

    headerRef.current
      .querySelectorAll("details[open]")
      .forEach((detail) => {
        detail.open = false;
      });

    document.body.classList.remove("mobile-menu-open");
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    closeAllMenus();
  }, [pathname]);

  useEffect(() => {
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, []);


  const handleDetailToggle = (detailClass) => (event) => {
    const current = event.currentTarget;

    if (!current.open) {
      current.querySelectorAll("details[open]").forEach((nested) => {
        nested.open = false;
      });
      return;
    }

    const parent = current.parentElement;
    if (!parent) {
      return;
    }

    Array.from(parent.children).forEach((element) => {
      if (
        element !== current &&
        element instanceof HTMLDetailsElement &&
        element.classList.contains(detailClass) &&
        element.open
      ) {
        element.open = false;
      }
    });
  };
  const handleLinkClick = () => {
    closeAllMenus();
  };

  const renderDesktopItem = (item) => {
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const active = isActiveItem(item, pathname);
    const key = item.href || item.label;

    if (!hasChildren) {
      return (
        <Link key={key} href={item.href} className="nav__link" aria-current={active ? "page" : undefined} onClick={handleLinkClick}>
          {item.label}
        </Link>
      );
    }

    return (
      <details key={key} className="nav-dropdown nav-dropdown--desktop" onToggle={handleDetailToggle("nav-dropdown")}>
        <summary className="nav__link nav__trigger" aria-current={active ? "page" : undefined}>
          {item.label}
        </summary>
        <div className="nav-dropdown__menu">
          {item.href ? (
            <Link href={item.href} className="nav-dropdown__item nav-dropdown__all" aria-current={active ? "page" : undefined} onClick={handleLinkClick}>
              All {item.label}
            </Link>
          ) : null}
          {item.children.map((child) => {
            const childHasChildren = Array.isArray(child.children) && child.children.length > 0;
            const childKey = child.href || `${item.label}-${child.label}`;
            const childActive = isActiveItem(child, pathname);

            if (!childHasChildren) {
              if (child.href) {
                return (
                  <Link key={childKey} href={child.href} className="nav-dropdown__item" aria-current={childActive ? "page" : undefined} onClick={handleLinkClick}>
                    {child.label}
                  </Link>
                );
              }

              return (
                <span key={childKey} className="nav-dropdown__item nav-dropdown__text">
                  {child.label}
                </span>
              );
            }

            return (
              <details key={childKey} className="nav-subdropdown nav-subdropdown--desktop" onToggle={handleDetailToggle("nav-subdropdown")}>
                <summary className="nav-dropdown__item nav-subdropdown__trigger" aria-current={childActive ? "page" : undefined}>
                  {child.label}
                </summary>
                <div className="nav-subdropdown__menu">
                  {child.children.map((grandchild) => {
                    const grandchildKey = grandchild.href || `${child.label}-${grandchild.label}`;
                    const grandchildActive = isActiveItem(grandchild, pathname);

                    if (grandchild.href) {
                      return (
                        <Link key={grandchildKey} href={grandchild.href} className="nav-dropdown__item" aria-current={grandchildActive ? "page" : undefined} onClick={handleLinkClick}>
                          {grandchild.label}
                        </Link>
                      );
                    }

                    return (
                      <span key={grandchildKey} className="nav-dropdown__item nav-dropdown__text">
                        {grandchild.label}
                      </span>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>
      </details>
    );
  };

  const renderMobileItem = (item) => {
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const active = isActiveItem(item, pathname);
    const key = item.href || `${item.label}-mobile`;

    if (!hasChildren) {
      if (!item.href) {
        return (
          <span key={key} className="nav__link nav__label-only">
            {item.label}
          </span>
        );
      }

      return (
        <Link key={key} href={item.href} className="nav__link" aria-current={active ? "page" : undefined} onClick={handleLinkClick}>
          {item.label}
        </Link>
      );
    }

    return (
      <details key={key} className="nav-dropdown nav-dropdown--mobile" onToggle={handleDetailToggle("nav-dropdown")}>
        <summary className="nav__link nav__trigger" aria-current={active ? "page" : undefined}>
          {item.label}
        </summary>
        <div className="nav-dropdown__menu">
          {item.href ? (
            <Link href={item.href} className="nav-dropdown__item nav-dropdown__all" aria-current={active ? "page" : undefined} onClick={handleLinkClick}>
              All {item.label}
            </Link>
          ) : null}
          {item.children.map((child) => {
            const childHasChildren = Array.isArray(child.children) && child.children.length > 0;
            const childKey = child.href || `${item.label}-${child.label}-mobile`;
            const childActive = isActiveItem(child, pathname);

            if (!childHasChildren) {
              if (child.href) {
                return (
                  <Link key={childKey} href={child.href} className="nav-dropdown__item" aria-current={childActive ? "page" : undefined} onClick={handleLinkClick}>
                    {child.label}
                  </Link>
                );
              }

              return (
                <span key={childKey} className="nav-dropdown__item nav-dropdown__text">
                  {child.label}
                </span>
              );
            }

            return (
              <details key={childKey} className="nav-subdropdown" onToggle={handleDetailToggle("nav-subdropdown")}>
                <summary className="nav-dropdown__item nav-subdropdown__trigger" aria-current={childActive ? "page" : undefined}>
                  {child.label}
                </summary>
                <div className="nav-subdropdown__menu nav-subdropdown__menu--mobile">
                  {child.children.map((grandchild) => {
                    const grandchildKey = grandchild.href || `${child.label}-${grandchild.label}-mobile`;
                    const grandchildActive = isActiveItem(grandchild, pathname);

                    if (grandchild.href) {
                      return (
                        <Link key={grandchildKey} href={grandchild.href} className="nav-dropdown__item" aria-current={grandchildActive ? "page" : undefined} onClick={handleLinkClick}>
                          {grandchild.label}
                        </Link>
                      );
                    }

                    return (
                      <span key={grandchildKey} className="nav-dropdown__item nav-dropdown__text">
                        {grandchild.label}
                      </span>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>
      </details>
    );
  };

  return (
    <header className="topbar" ref={headerRef}>
      <div className="container topbar__inner">
        <Link href="/" className="brand" onClick={handleLinkClick}>
          <Image src="/TE.png" alt="Trimurti Enterprise Logo" width={42} height={42} style={{ objectFit: "contain" }} priority />
          Trimurti Enterprise
        </Link>
        <nav className="nav" aria-label="Primary">
          {navigation.map((item) => renderDesktopItem(item))}
        </nav>
        <Link href="/contact" className="button" onClick={handleLinkClick}>
          Get Quote
        </Link>
        <details className="menu-toggle" ref={menuToggleRef} onToggle={syncMobileMenuState}>
          <summary aria-label="Open menu"><span className="menu-toggle__lines" aria-hidden="true"><span></span><span></span><span></span></span></summary>
          <div className="topbar__mobile">{navigation.map((item) => renderMobileItem(item))}</div>
        </details>
      </div>
    </header>
  );
}
