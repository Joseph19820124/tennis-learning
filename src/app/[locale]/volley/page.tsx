'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function VolleyPage() {
  const t = useTranslations('volley');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551773188-d4f5b2e1dc4e?w=1920&h=600&fit=crop"
            alt="Tennis volley"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-xl text-orange-100">{t('heroDesc')}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro Video */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('introVideoTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <YouTubeEmbed videoId="gbVDhUjRfYg" title={t('video1Desc')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('video1Desc')}</p>
            </div>
            <div>
              <YouTubeEmbed videoId="-hpmBTvgIMc" title={t('video2Desc')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('video2Desc')}</p>
            </div>
          </div>
        </section>

        {/* Types of Volley */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
            {t('typesTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">{t('forehandVolley')}</h3>
              <p className="text-gray-600">{t('forehandVolleyDesc')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">{t('backhandVolley')}</h3>
              <p className="text-gray-600">{t('backhandVolleyDesc')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">{t('dropVolley')}</h3>
              <p className="text-gray-600">{t('dropVolleyDesc')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">{t('driveVolley')}</h3>
              <p className="text-gray-600">{t('driveVolleyDesc')}</p>
            </div>
          </div>
        </section>

        {/* Key Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
            {t('keyTechniques')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('technique1Title')}</h3>
                  <p className="text-gray-600 mt-1">{t('technique1Desc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('technique2Title')}</h3>
                  <p className="text-gray-600 mt-1">{t('technique2Desc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('technique3Title')}</h3>
                  <p className="text-gray-600 mt-1">{t('technique3Desc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('technique4Title')}</h3>
                  <p className="text-gray-600 mt-1">{t('technique4Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grip */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
            {t('gripTitle')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="md:flex gap-6">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop"
                    alt="Continental grip"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{t('continentalGrip')}</h3>
                <p className="text-gray-600 mb-4">{t('continentalGripDesc')}</p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <p className="text-orange-800">{t('gripTip')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
            {t('positioningTitle')}
          </h2>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span className="text-gray-700">{t('position1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span className="text-gray-700">{t('position2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span className="text-gray-700">{t('position3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span className="text-gray-700">{t('position4')}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
            {t('commonMistakes')}
          </h2>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">✗</span>
                <div>
                  <strong className="text-gray-800">{t('mistake1Title')}</strong>
                  <p className="text-gray-600">{t('mistake1Desc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">✗</span>
                <div>
                  <strong className="text-gray-800">{t('mistake2Title')}</strong>
                  <p className="text-gray-600">{t('mistake2Desc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">✗</span>
                <div>
                  <strong className="text-gray-800">{t('mistake3Title')}</strong>
                  <p className="text-gray-600">{t('mistake3Desc')}</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('nextStep')}</h2>
          <p className="text-gray-300 mb-6">{t('nextStepDesc')}</p>
          <Link
            href="/practice"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-colors"
          >
            {t('nextStepButton')}
          </Link>
        </section>
      </div>
    </div>
  );
}
