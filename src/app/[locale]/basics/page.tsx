'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function BasicsPage() {
  const t = useTranslations('basics');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1920&h=600&fit=crop"
            alt="Tennis basics"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-xl text-green-100">
            {t('heroDesc')}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro Video */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('introVideoTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <YouTubeEmbed videoId="8V_KWh1Uoeo" title={t('video1Desc')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('video1Desc')}</p>
            </div>
            <div>
              <YouTubeEmbed videoId="YqgcykDGB2A" title={t('video2Desc')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('video2Desc')}</p>
            </div>
          </div>
        </section>

        {/* What is Forehand */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
            {t('whatIsForehand')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="md:flex gap-6">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop"
                    alt="Tennis forehand"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t('forehandDesc1')}
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t('forehandDesc2')}
                </p>
              </div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
              <p className="text-green-800 font-medium">
                {t('keyPoint')}
              </p>
            </div>
          </div>
        </section>

        {/* Importance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
            {t('whyImportant')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=200&fit=crop"
                  alt="Tennis match"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{t('highFrequency')}</h3>
              <p className="text-gray-600">
                {t('highFrequencyDesc')}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=200&fit=crop"
                  alt="Tennis power"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{t('mainScoring')}</h3>
              <p className="text-gray-600">
                {t('mainScoringDesc')}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-800">{t('buildRhythm')}</h3>
              <p className="text-gray-600">
                {t('buildRhythmDesc')}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-800">{t('psychological')}</h3>
              <p className="text-gray-600">
                {t('psychologicalDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Pro Demo Video */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('proDemoTitle')}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <YouTubeEmbed videoId="NsYdWHVfQKo" title={t('proDemoDesc')} />
            <p className="mt-4 text-gray-600 text-center">{t('proDemoDesc')}</p>
          </div>
        </section>

        {/* Basic Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
            {t('basicElements')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('element1Title')}</h3>
                  <p className="text-gray-600 mt-1">
                    {t('element1Desc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('element2Title')}</h3>
                  <p className="text-gray-600 mt-1">
                    {t('element2Desc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('element3Title')}</h3>
                  <p className="text-gray-600 mt-1">
                    {t('element3Desc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('element4Title')}</h3>
                  <p className="text-gray-600 mt-1">
                    {t('element4Desc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{t('element5Title')}</h3>
                  <p className="text-gray-600 mt-1">
                    {t('element5Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern vs Classic */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
            {t('modernVsClassic')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <YouTubeEmbed videoId="QZtxvwHvNe4" title={t('federerClassic')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('federerClassic')}</p>
            </div>
            <div>
              <YouTubeEmbed videoId="IbLqTVTZO3s" title={t('nadalModern')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('nadalModern')}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">{t('tableFeature')}</th>
                  <th className="px-4 py-3 text-left">{t('tableModern')}</th>
                  <th className="px-4 py-3 text-left">{t('tableClassic')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">{t('tableGrip')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('modernGrip')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('classicGrip')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{t('tableStance')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('modernStance')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('classicStance')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">{t('tableBackswing')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('modernBackswing')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('classicBackswing')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{t('tableSpin')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('modernSpin')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('classicSpin')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">{t('tableContact')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('modernContact')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('classicContact')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            {t('tableNote')}
          </p>
        </section>

        {/* Tips for Beginners */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
            {t('beginnerTips')}
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&#10003;</span>
                <span className="text-gray-700">
                  <strong>{t('tip1Title')}</strong>{t('tip1Desc')}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&#10003;</span>
                <span className="text-gray-700">
                  <strong>{t('tip2Title')}</strong>{t('tip2Desc')}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&#10003;</span>
                <span className="text-gray-700">
                  <strong>{t('tip3Title')}</strong>{t('tip3Desc')}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&#10003;</span>
                <span className="text-gray-700">
                  <strong>{t('tip4Title')}</strong>{t('tip4Desc')}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&#10003;</span>
                <span className="text-gray-700">
                  <strong>{t('tip5Title')}</strong>{t('tip5Desc')}
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('nextStep')}</h2>
          <p className="text-gray-300 mb-6">
            {t('nextStepDesc')}
          </p>
          <Link
            href="/grip"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            {t('nextStepButton')}
          </Link>
        </section>
      </div>
    </div>
  );
}
