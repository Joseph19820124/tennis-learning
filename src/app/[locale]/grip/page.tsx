'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

type GripKey = 'continental' | 'eastern' | 'semiWestern' | 'western';

const gripKeys: GripKey[] = ['continental', 'eastern', 'semiWestern', 'western'];

export default function GripPage() {
  const t = useTranslations('grip');

  const getDifficultyLevel = (key: GripKey): string => {
    const difficultyMap: Record<GripKey, 'beginner' | 'intermediate' | 'advanced'> = {
      continental: 'beginner',
      eastern: 'beginner',
      semiWestern: 'intermediate',
      western: 'advanced',
    };
    return t(difficultyMap[key]);
  };

  const getDifficultyColor = (key: GripKey): string => {
    const colorMap: Record<GripKey, string> = {
      continental: 'bg-green-500',
      eastern: 'bg-green-500',
      semiWestern: 'bg-yellow-500',
      western: 'bg-red-500',
    };
    return colorMap[key];
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1920&h=600&fit=crop"
            alt="Tennis grip"
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
        {/* Video Tutorial */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('videoTutorial')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <YouTubeEmbed videoId="8V_KWh1Uoeo" title={t('video1Desc')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('video1Desc')}</p>
            </div>
            <div>
              <YouTubeEmbed videoId="QZtxvwHvNe4" title={t('video2Desc')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('video2Desc')}</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('understandGrip')}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4 leading-relaxed">
              {t('gripIntro')}
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-800">
                <strong>{t('howToFind')}</strong>{t('howToFindDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Grip Diagram */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('bevelDiagram')}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48">
                {/* Octagon representation */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Octagon */}
                  <polygon
                    points="100,10 161,39 190,100 161,161 100,190 39,161 10,100 39,39"
                    fill="#f0fdf4"
                    stroke="#16a34a"
                    strokeWidth="2"
                  />
                  {/* Numbers */}
                  <text x="100" y="30" textAnchor="middle" className="text-sm font-bold fill-gray-700">1</text>
                  <text x="155" y="55" textAnchor="middle" className="text-sm font-bold fill-gray-700">2</text>
                  <text x="175" y="105" textAnchor="middle" className="text-sm font-bold fill-gray-700">3</text>
                  <text x="155" y="155" textAnchor="middle" className="text-sm font-bold fill-gray-700">4</text>
                  <text x="100" y="180" textAnchor="middle" className="text-sm font-bold fill-gray-700">5</text>
                  <text x="45" y="155" textAnchor="middle" className="text-sm font-bold fill-gray-700">6</text>
                  <text x="25" y="105" textAnchor="middle" className="text-sm font-bold fill-gray-700">7</text>
                  <text x="45" y="55" textAnchor="middle" className="text-sm font-bold fill-gray-700">8</text>
                  {/* Center text */}
                  <text x="100" y="100" textAnchor="middle" className="text-xs fill-gray-500">{t('handleCrossSection')}</text>
                  <text x="100" y="115" textAnchor="middle" className="text-xs fill-gray-500">{t('fromBottom')}</text>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="bg-gray-100 p-2 rounded text-center">
                <span className="font-bold">{t('bevel')}2:</span> {t('continental')}
              </div>
              <div className="bg-green-100 p-2 rounded text-center">
                <span className="font-bold">{t('bevel')}3:</span> {t('eastern')}
              </div>
              <div className="bg-green-200 p-2 rounded text-center">
                <span className="font-bold">{t('bevel')}4:</span> {t('semiWestern')}
              </div>
              <div className="bg-green-300 p-2 rounded text-center">
                <span className="font-bold">{t('bevel')}5:</span> {t('western')}
              </div>
            </div>
          </div>
        </section>

        {/* Grip Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('gripDetails')}</h2>
          <div className="space-y-6">
            {gripKeys.map((key) => (
              <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 text-white px-6 py-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold">{t(`grips.${key}.name`)}</h3>
                      <p className="text-green-200 text-sm">{t(`grips.${key}.english`)}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(key)}`}>
                      {getDifficultyLevel(key)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{t(`grips.${key}.description`)}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-green-600 mb-2">{t('pros')}</h4>
                      <ul className="space-y-1">
                        {(t.raw(`grips.${key}.pros`) as string[]).map((pro: string) => (
                          <li key={pro} className="text-gray-600 text-sm flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-600 mb-2">{t('cons')}</h4>
                      <ul className="space-y-1">
                        {(t.raw(`grips.${key}.cons`) as string[]).map((con: string) => (
                          <li key={con} className="text-gray-600 text-sm flex items-center">
                            <span className="text-red-500 mr-2">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <span className="font-medium text-gray-700">{t('usage')}</span>
                    <span className="text-gray-600">{t(`grips.${key}.usage`)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('recommendation')}</h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('rec1Title')}</h3>
                  <p className="text-gray-600">
                    {t('rec1Desc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('rec2Title')}</h3>
                  <p className="text-gray-600">
                    {t('rec2Desc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('rec3Title')}</h3>
                  <p className="text-gray-600">
                    {t('rec3Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('commonMistakes')}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-3">!</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('mistake1Title')}</h3>
                  <p className="text-gray-600">
                    {t('mistake1Desc')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-3">!</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('mistake2Title')}</h3>
                  <p className="text-gray-600">
                    {t('mistake2Desc')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-3">!</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('mistake3Title')}</h3>
                  <p className="text-gray-600">
                    {t('mistake3Desc')}
                  </p>
                </div>
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
            href="/footwork"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            {t('nextStepButton')}
          </Link>
        </section>
      </div>
    </div>
  );
}
