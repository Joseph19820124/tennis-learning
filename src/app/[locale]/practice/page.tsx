'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function PracticePage() {
  const t = useTranslations('practice');

  const beginnerContent = t.raw('beginnerContent') as string[];
  const beginnerFocus = t.raw('beginnerFocus') as string[];
  const intermediateContent = t.raw('intermediateContent') as string[];
  const intermediateFocus = t.raw('intermediateFocus') as string[];
  const advancedContent = t.raw('advancedContent') as string[];
  const advancedFocus = t.raw('advancedFocus') as string[];

  return (
    <div className="min-h-screen">
      {/* Hero with Background Image */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=600&fit=crop"
            alt={t('heroTitle')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-700/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-xl text-green-100">
            {t('heroDesc')}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Practice Levels */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('phasedPlan')}</h2>

          {/* Beginner */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="bg-green-500 text-white px-6 py-4">
              <h3 className="text-xl font-bold">{t('beginner')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                {t('beginnerDesc')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">{t('practiceContent')}</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {beginnerContent.map((item, index) => (
                      <li key={index}>* {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">{t('focusPoints')}</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {beginnerFocus.map((item, index) => (
                      <li key={index}>* {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Intermediate */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="bg-green-600 text-white px-6 py-4">
              <h3 className="text-xl font-bold">{t('intermediate')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                {t('intermediateDesc')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">{t('practiceContent')}</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {intermediateContent.map((item, index) => (
                      <li key={index}>* {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">{t('focusPoints')}</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {intermediateFocus.map((item, index) => (
                      <li key={index}>* {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-700 text-white px-6 py-4">
              <h3 className="text-xl font-bold">{t('advanced')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                {t('advancedDesc')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">{t('practiceContent')}</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {advancedContent.map((item, index) => (
                      <li key={index}>* {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">{t('focusPoints')}</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {advancedFocus.map((item, index) => (
                      <li key={index}>* {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('specificMethods')}</h2>

          <div className="space-y-6">
            {/* Wall Practice */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x1F9F1;</span>
                {t('wallPractice')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('wallPracticeDesc')}
              </p>

              {/* Wall Practice Video */}
              <div className="mb-4">
                <YouTubeEmbed videoId="QZtxvwHvNe4" title={t('wallPractice')} />
              </div>

              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-bold text-gray-700 mb-2">{t('wallPracticePoints')}</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>* <strong>{t('wallBeginner')}</strong></li>
                  <li>* <strong>{t('wallIntermediate')}</strong></li>
                  <li>* <strong>{t('wallAdvanced')}</strong></li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-bold text-green-700 mb-2">{t('wallRecommend')}</h4>
                <p className="text-gray-600 text-sm">
                  {t('wallRecommendDesc')}
                </p>
              </div>
            </div>

            {/* Multi-ball */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x1F3BE;</span>
                {t('multiBall')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('multiBallDesc')}
              </p>

              {/* Multi-ball Training Video */}
              <div className="mb-4">
                <YouTubeEmbed videoId="YqgcykDGB2A" title={t('multiBall')} />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-700 mb-2">{t('fixedPoint')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('fixedPointDesc')}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-700 mb-2">{t('movingPractice')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('movingPracticeDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Rally Practice */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x1F465;</span>
                {t('rallyPractice')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('rallyPracticeDesc')}
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-bold text-gray-700">{t('deepRally')}</h4>
                    <p className="text-gray-600 text-sm">{t('deepRallyDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-bold text-gray-700">{t('crossCourtRally')}</h4>
                    <p className="text-gray-600 text-sm">{t('crossCourtRallyDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-bold text-gray-700">{t('downTheLineRally')}</h4>
                    <p className="text-gray-600 text-sm">{t('downTheLineRallyDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-bold text-gray-700">{t('fullCourtRally')}</h4>
                    <p className="text-gray-600 text-sm">{t('fullCourtRallyDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shadow Swing */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x1F3C3;</span>
                {t('shadowSwing')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('shadowSwingDesc')}
              </p>
              <div className="bg-yellow-50 p-4 rounded">
                <h4 className="font-bold text-yellow-700 mb-2">{t('dailySuggestion')}</h4>
                <p className="text-gray-600 text-sm">
                  {t('dailySuggestionDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Videos Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('practiceVideos')}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('practiceVideoTitle')}</h3>
            <p className="text-gray-600 mb-4">
              {t('practiceVideoDesc')}
            </p>
            <YouTubeEmbed videoId="8V_KWh1Uoeo" title={t('practiceVideoTitle')} />
          </div>
        </section>

        {/* Advanced Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('advancedTechniques')}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">{t('insideOut')}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {t('insideOutDesc')}
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>{t('insideOutPractice')}</strong>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">{t('changeLine')}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {t('changeLineDesc')}
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>{t('changeLinePractice')}</strong>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">{t('topspinLob')}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {t('topspinLobDesc')}
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>{t('topspinLobPractice')}</strong>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">{t('acceleration')}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {t('accelerationDesc')}
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>{t('accelerationPractice')}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Training Schedule */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('trainingSchedule')}</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">{t('frequency')}</th>
                  <th className="px-4 py-3 text-left">{t('content')}</th>
                  <th className="px-4 py-3 text-left">{t('duration')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">{t('daily')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('shadowPractice')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('mins15_20')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{t('times2_3')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('wallTraining')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('mins30_45')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">{t('times1_2')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('multiBallTraining')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('hour1')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{t('times2_3')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('rallyTraining')}</td>
                  <td className="px-4 py-3 text-gray-600">{t('hours1_2')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            {t('scheduleNote')}
          </p>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('nextStep')}</h2>
          <p className="text-gray-300 mb-6">
            {t('nextStepDesc')}
          </p>
          <Link
            href="/pros"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            {t('nextStepButton')}
          </Link>
        </section>
      </div>
    </div>
  );
}
