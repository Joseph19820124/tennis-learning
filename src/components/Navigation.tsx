'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useState, useRef, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavItem {
  href: string;
  label: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

type NavElement = NavItem | NavGroup;

function isNavGroup(item: NavElement): item is NavGroup {
  return 'items' in item;
}

export default function Navigation() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenGroups, setMobileOpenGroups] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navStructure: NavElement[] = [
    { href: '/', label: t('home') },
    {
      label: t('groups.strokes'),
      items: [
        { href: '/basics', label: t('basics') },
        { href: '/backhand', label: t('backhand') },
        { href: '/serve', label: t('serve') },
        { href: '/volley', label: t('volley') },
      ],
    },
    {
      label: t('groups.fundamentals'),
      items: [
        { href: '/grip', label: t('grip') },
        { href: '/footwork', label: t('footwork') },
        { href: '/swing', label: t('swing') },
      ],
    },
    {
      label: t('groups.improvement'),
      items: [
        { href: '/mistakes', label: t('mistakes') },
        { href: '/practice', label: t('practice') },
        { href: '/pros', label: t('pros') },
      ],
    },
    { href: '/blog', label: t('blog') },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileGroup = (label: string) => {
    setMobileOpenGroups((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const isActiveGroup = (items: NavItem[]) => {
    return items.some((item) => pathname === item.href);
  };

  return (
    <nav className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🎾</span>
            <span className="font-bold text-xl">{t('siteName')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {navStructure.map((item, index) =>
              isNavGroup(item) ? (
                <div key={index} className="relative">
                  <button
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActiveGroup(item.items)
                        ? 'bg-green-700 text-white'
                        : 'text-green-100 hover:bg-green-500'
                    }`}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            pathname === subItem.href
                              ? 'bg-green-100 text-green-800 font-medium'
                              : 'text-gray-700 hover:bg-green-50'
                          }`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-green-700 text-white'
                      : 'text-green-100 hover:bg-green-500'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="ml-4 border-l border-green-500 pl-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('toggleMenu')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            {navStructure.map((item, index) =>
              isNavGroup(item) ? (
                <div key={index}>
                  <button
                    className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                      isActiveGroup(item.items)
                        ? 'bg-green-700 text-white'
                        : 'text-green-100 hover:bg-green-500'
                    }`}
                    onClick={() => toggleMobileGroup(item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        mobileOpenGroups.includes(item.label) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileOpenGroups.includes(item.label) && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-3 py-2 rounded-md text-sm ${
                            pathname === subItem.href
                              ? 'bg-green-700 text-white'
                              : 'text-green-100 hover:bg-green-500'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'bg-green-700 text-white'
                      : 'text-green-100 hover:bg-green-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
