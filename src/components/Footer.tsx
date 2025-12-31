'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="mr-2">🎾</span>
              {nav('siteName')}
            </h3>
            <p className="text-gray-400 text-sm">{t('about')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link
                  href="/basics"
                  className="hover:text-green-400 transition-colors"
                >
                  {t('basicsLink')}
                </Link>
              </li>
              <li>
                <Link
                  href="/grip"
                  className="hover:text-green-400 transition-colors"
                >
                  {t('gripLink')}
                </Link>
              </li>
              <li>
                <Link
                  href="/swing"
                  className="hover:text-green-400 transition-colors"
                >
                  {t('swingLink')}
                </Link>
              </li>
              <li>
                <Link
                  href="/practice"
                  className="hover:text-green-400 transition-colors"
                >
                  {t('practiceLink')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Tips */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('tips')}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ {t('tip1')}</li>
              <li>✓ {t('tip2')}</li>
              <li>✓ {t('tip3')}</li>
              <li>✓ {t('tip4')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
