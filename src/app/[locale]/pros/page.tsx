'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const playerKeys = ['federer', 'nadal', 'djokovic', 'alcaraz', 'sinner'] as const;

const playerData = {
  federer: {
    image: '🇨🇭',
    youtubeId: 'QZtxvwHvNe4',
  },
  nadal: {
    image: '🇪🇸',
    youtubeId: 'IbLqTVTZO3s',
  },
  djokovic: {
    image: '🇷🇸',
    youtubeId: '32nyPw9YUEA',
  },
  alcaraz: {
    image: '🇪🇸',
    youtubeId: '2lLCIzntsXk',
  },
  sinner: {
    image: '🇮🇹',
    youtubeId: 'WPY0s9FQA4g',
  },
};

export default function ProsPage() {
  const t = useTranslations('pros');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=1920&h=600&fit=crop"
            alt="Tennis background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-700/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-xl text-green-100">
            {t('heroDesc')}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('whyLearn')}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {t('whyLearnDesc')}
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-800">
                <strong>{t('importantNote').split('：')[0]}：</strong>{t('importantNote').split('：').slice(1).join('：')}
              </p>
            </div>
          </div>
        </section>

        {/* Players */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('topPlayers')}</h2>
          <div className="space-y-6">
            {playerKeys.map((playerKey) => {
              const characteristics = t.raw(`players.${playerKey}.characteristics`) as string[];
              const strengths = t.raw(`players.${playerKey}.strengths`) as string[];

              return (
                <div key={playerKey} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-4xl mr-4">{playerData[playerKey].image}</span>
                        <div>
                          <h3 className="text-xl font-bold">{t(`players.${playerKey}.name`)}</h3>
                          <p className="text-green-100 text-sm">{t(`players.${playerKey}.english`)} · {t(`players.${playerKey}.country`)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {t(`players.${playerKey}.titles`)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="text-gray-500">{t('gripStyle')}</span>
                        <p className="font-medium text-gray-800">{t(`players.${playerKey}.grip`)}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="text-gray-500">{t('playStyle')}</span>
                        <p className="font-medium text-gray-800">{t(`players.${playerKey}.style`)}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="text-gray-500">{t('mainStrengths')}</span>
                        <p className="font-medium text-gray-800">{strengths.join('、')}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">{t('characteristics')}</h4>
                      <ul className="space-y-1">
                        {characteristics.map((char, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded">
                      <h4 className="font-bold text-green-800 mb-1">{t('learnFrom')}</h4>
                      <p className="text-gray-600 text-sm">{t(`players.${playerKey}.learnFrom`)}</p>
                    </div>

                    {/* YouTube Video */}
                    <div className="mt-6">
                      <h4 className="font-bold text-gray-800 mb-3">{t('forehandVideo')}</h4>
                      <YouTubeEmbed
                        videoId={playerData[playerKey].youtubeId}
                        title={`${t(`players.${playerKey}.name`)}${t('forehandVideo')}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Common Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('commonPrinciples')}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              {t('commonPrinciplesDesc')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">{t('earlyPrep')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('earlyPrepDesc')}
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">{t('useBody')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('useBodyDesc')}
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">{t('contactInFront')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('contactInFrontDesc')}
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">{t('completeFollow')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('completeFollowDesc')}
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">{t('relaxAndExplode')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('relaxAndExplodeDesc')}
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">{t('watchBall')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('watchBallDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Watch */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('howToLearn')}</h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">{t('tip1Title')}</h3>
                <p className="text-gray-600 text-sm">{t('tip1Desc')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">{t('tip2Title')}</h3>
                <p className="text-gray-600 text-sm">{t('tip2Desc')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">{t('tip3Title')}</h3>
                <p className="text-gray-600 text-sm">{t('tip3Desc')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">{t('tip4Title')}</h3>
                <p className="text-gray-600 text-sm">{t('tip4Desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Style Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('styleComparison')}</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">{t('feature')}</th>
                  <th className="px-4 py-3 text-left">{t('flatStyle')}</th>
                  <th className="px-4 py-3 text-left">{t('topspinStyle')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">{t('compGrip')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('flatGrip')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('topspinGrip')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{t('compContactHeight')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('flatContact')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('topspinContact')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">{t('compFollowThrough')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('flatFollow')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('topspinFollow')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{t('compTrajectory')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('flatTrajectory')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('topspinTrajectory')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">{t('compSurface')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('flatSurface')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('topspinSurface')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{t('compFitness')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('flatFitness')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('topspinFitness')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('recommendation')}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('recBeginner')}</h3>
                  <p className="text-gray-600">
                    {t('recBeginnerDesc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('recElegant')}</h3>
                  <p className="text-gray-600">
                    {t('recElegantDesc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('recPower')}</h3>
                  <p className="text-gray-600">
                    {t('recPowerDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('congratulations')}</h2>
          <p className="text-gray-300 mb-6">
            {t('congratulationsDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/basics"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
            >
              {t('reviewBasics')}
            </Link>
            <Link
              href="/practice"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-800 transition-colors"
            >
              {t('checkPractice')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
