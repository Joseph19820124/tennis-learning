'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function ServePage() {
  const t = useTranslations('serve');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=1920&h=600&fit=crop"
            alt="Tennis serve"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-xl text-purple-100">{t('heroDesc')}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro Video */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('introVideoTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <YouTubeEmbed videoId="tKgIBrKcr3Y" title={t('video1Desc')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('video1Desc')}</p>
            </div>
            <div>
              <YouTubeEmbed videoId="R2Ukue3bLGE" title={t('video2Desc')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('video2Desc')}</p>
            </div>
          </div>
        </section>

        {/* Types of Serve */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
            {t('typesTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-3">💨</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{t('flatServe')}</h3>
              <p className="text-gray-600 text-sm">{t('flatServeDesc')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-3">🌀</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{t('sliceServe')}</h3>
              <p className="text-gray-600 text-sm">{t('sliceServeDesc')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-3">⬆️</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{t('kickServe')}</h3>
              <p className="text-gray-600 text-sm">{t('kickServeDesc')}</p>
            </div>
          </div>
        </section>

        {/* Serve Motion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
            {t('serveMotion')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('motion1Title')}</h3>
                  <p className="text-gray-600 mt-1">{t('motion1Desc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('motion2Title')}</h3>
                  <p className="text-gray-600 mt-1">{t('motion2Desc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('motion3Title')}</h3>
                  <p className="text-gray-600 mt-1">{t('motion3Desc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('motion4Title')}</h3>
                  <p className="text-gray-600 mt-1">{t('motion4Desc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('motion5Title')}</h3>
                  <p className="text-gray-600 mt-1">{t('motion5Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
            {t('proAnalysis')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <YouTubeEmbed videoId="HrNRY1sMCmU" title={t('kyrgiosServe')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('kyrgiosServe')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <YouTubeEmbed videoId="Sz6jQdJVIBM" title={t('sheltonServe')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('sheltonServe')}</p>
            </div>
          </div>
        </section>

        {/* Toss Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
            {t('tossTitle')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="md:flex gap-6">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=300&fit=crop"
                    alt="Ball toss"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">{t('toss1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">{t('toss2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">{t('toss3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">{t('toss4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
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
            href="/volley"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-500 transition-colors"
          >
            {t('nextStepButton')}
          </Link>
        </section>
      </div>
    </div>
  );
}
