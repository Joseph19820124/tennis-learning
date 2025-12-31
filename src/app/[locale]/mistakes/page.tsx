'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function MistakesPage() {
  const t = useTranslations('mistakes');

  const mistakeIds = [1, 2, 3, 4, 5, 6, 7, 8] as const;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=1920&h=600&fit=crop"
            alt="Tennis mistakes correction"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-orange-700/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-xl text-red-100">{t('heroDesc')}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('whyKnowMistakes')}
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {t('whyKnowMistakesDesc')}
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-800">
                <strong>{t('encouragement').split('：')[0]}：</strong>
                {t('encouragement').split('：').slice(1).join('：')}
              </p>
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t('videoTutorial')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <YouTubeEmbed videoId="8V_KWh1Uoeo" title={t('video1Title')} />
              <p className="mt-3 text-gray-700 font-medium">{t('video1Title')}</p>
              <p className="text-gray-500 text-sm">{t('video1Desc')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <YouTubeEmbed videoId="YqgcykDGB2A" title={t('video2Title')} />
              <p className="mt-3 text-gray-700 font-medium">{t('video2Title')}</p>
              <p className="text-gray-500 text-sm">{t('video2Desc')}</p>
            </div>
          </div>
        </section>

        {/* Mistakes List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('eightMistakes')}
          </h2>
          <div className="space-y-6">
            {mistakeIds.map((id) => {
              const symptoms = t.raw(`mistake${id}.symptoms`) as string[];
              const causes = t.raw(`mistake${id}.causes`) as string[];
              const corrections = t.raw(`mistake${id}.corrections`) as string[];

              return (
                <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-red-500 text-white px-6 py-4">
                    <div className="flex items-center">
                      <span className="bg-white text-red-500 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                        {id}
                      </span>
                      <h3 className="text-xl font-bold">
                        {t(`mistake${id}.title`)}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      {t(`mistake${id}.description`)}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-bold text-red-800 mb-2">
                          {t('symptoms')}
                        </h4>
                        <ul className="space-y-1">
                          {symptoms.map((symptom) => (
                            <li
                              key={symptom}
                              className="text-gray-600 text-sm flex items-center"
                            >
                              <span className="text-red-500 mr-2">•</span>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-bold text-orange-800 mb-2">
                          {t('causes')}
                        </h4>
                        <ul className="space-y-1">
                          {causes.map((cause) => (
                            <li
                              key={cause}
                              className="text-gray-600 text-sm flex items-center"
                            >
                              <span className="text-orange-500 mr-2">•</span>
                              {cause}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">
                        {t('corrections')}
                      </h4>
                      <ul className="space-y-2">
                        {corrections.map((correction, index) => (
                          <li
                            key={correction}
                            className="text-gray-600 text-sm flex items-start"
                          >
                            <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            {correction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Self-Check */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t('selfCheck')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📹</span>
                  {t('videoAnalysis')}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {t('videoAnalysisDesc')}
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• {t('videoCheck1')}</li>
                  <li>• {t('videoCheck2')}</li>
                  <li>• {t('videoCheck3')}</li>
                  <li>• {t('videoCheck4')}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">👥</span>
                  {t('feedback')}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{t('feedbackDesc')}</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• {t('feedbackCheck1')}</li>
                  <li>• {t('feedbackCheck2')}</li>
                  <li>• {t('feedbackCheck3')}</li>
                  <li>• {t('feedbackCheck4')}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🪞</span>
                  {t('mirrorPractice')}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {t('mirrorPracticeDesc')}
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• {t('mirrorCheck1')}</li>
                  <li>• {t('mirrorCheck2')}</li>
                  <li>• {t('mirrorCheck3')}</li>
                  <li>• {t('mirrorCheck4')}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📊</span>
                  {t('resultAnalysis')}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {t('resultAnalysisDesc')}
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• {t('result1')}</li>
                  <li>• {t('result2')}</li>
                  <li>• {t('result3')}</li>
                  <li>• {t('result4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t('correctionTips')}
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">1.</span>
                <span className="text-gray-700">{t('tip1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">2.</span>
                <span className="text-gray-700">{t('tip2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">3.</span>
                <span className="text-gray-700">{t('tip3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">4.</span>
                <span className="text-gray-700">{t('tip4')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">5.</span>
                <span className="text-gray-700">{t('tip5')}</span>
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
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            {t('nextStepButton')}
          </Link>
        </section>
      </div>
    </div>
  );
}
