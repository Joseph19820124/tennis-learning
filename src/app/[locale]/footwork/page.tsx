'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function FootworkPage() {
  const t = useTranslations('footwork');

  return (
    <div className="min-h-screen">
      {/* Hero with Background Image */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=600&fit=crop"
            alt="Tennis footwork"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-700/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-xl text-green-100">{t('heroDesc')}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Ready Position */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
              1
            </span>
            {t('readyPosition')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('readyPositionIntro')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  {t('standardReady')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600">{t('ready1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600">{t('ready2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600">{t('ready3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600">{t('ready4')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600">{t('ready5')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600">{t('ready6')}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-green-800 mb-3">
                  {t('commonErrors')}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    {t('error1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    {t('error2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    {t('error3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    {t('error4')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stances */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
              2
            </span>
            {t('stanceTypes')}
          </h2>
          <div className="space-y-6">
            {/* Open Stance */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-3">
                <h3 className="text-xl font-bold">{t('openStance')}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{t('openStanceDesc')}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t('advantages')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('openStanceAdv1')}</li>
                      <li>• {t('openStanceAdv2')}</li>
                      <li>• {t('openStanceAdv3')}</li>
                      <li>• {t('openStanceAdv4')}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t('disadvantages')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('openStanceDisadv1')}</li>
                      <li>• {t('openStanceDisadv2')}</li>
                      <li>• {t('openStanceDisadv3')}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t('suitableFor')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('openStanceSuitable1')}</li>
                      <li>• {t('openStanceSuitable2')}</li>
                      <li>• {t('openStanceSuitable3')}</li>
                      <li>• {t('openStanceSuitable4')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Semi-Open Stance */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-500 text-white px-6 py-3">
                <h3 className="text-xl font-bold">{t('semiOpenStance')}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{t('semiOpenStanceDesc')}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t('advantages')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('semiOpenStanceAdv1')}</li>
                      <li>• {t('semiOpenStanceAdv2')}</li>
                      <li>• {t('semiOpenStanceAdv3')}</li>
                      <li>• {t('semiOpenStanceAdv4')}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t('disadvantages')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('semiOpenStanceDisadv1')}</li>
                      <li>• {t('semiOpenStanceDisadv2')}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t('suitableFor')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('semiOpenStanceSuitable1')}</li>
                      <li>• {t('semiOpenStanceSuitable2')}</li>
                      <li>• {t('semiOpenStanceSuitable3')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Closed Stance */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-400 text-white px-6 py-3">
                <h3 className="text-xl font-bold">{t('closedStance')}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{t('closedStanceDesc')}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t('advantages')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('closedStanceAdv1')}</li>
                      <li>• {t('closedStanceAdv2')}</li>
                      <li>• {t('closedStanceAdv3')}</li>
                      <li>• {t('closedStanceAdv4')}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t('disadvantages')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('closedStanceDisadv1')}</li>
                      <li>• {t('closedStanceDisadv2')}</li>
                      <li>• {t('closedStanceDisadv3')}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t('suitableFor')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('closedStanceSuitable1')}</li>
                      <li>• {t('closedStanceSuitable2')}</li>
                      <li>• {t('closedStanceSuitable3')}</li>
                      <li>• {t('closedStanceSuitable4')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footwork Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
              3
            </span>
            {t('footworkPatterns')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {t('splitStep')}
                </h3>
                <p className="text-gray-600 mb-2">{t('splitStepDesc')}</p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>{t('splitStepKey')}</strong>
                </div>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {t('sideShuffle')}
                </h3>
                <p className="text-gray-600 mb-2">{t('sideShuffleDesc')}</p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>{t('sideShuffleKey')}</strong>
                </div>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {t('crossoverStep')}
                </h3>
                <p className="text-gray-600 mb-2">{t('crossoverStepDesc')}</p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>{t('crossoverStepKey')}</strong>
                </div>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {t('adjustmentSteps')}
                </h3>
                <p className="text-gray-600 mb-2">{t('adjustmentStepsDesc')}</p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>{t('adjustmentStepsKey')}</strong>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {t('recoverySteps')}
                </h3>
                <p className="text-gray-600 mb-2">{t('recoveryStepsDesc')}</p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>{t('recoveryStepsKey')}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
              4
            </span>
            {t('videoTutorial')}
          </h2>
          <div className="space-y-8">
            {/* Video 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  {t('video1Title')}
                </h3>
                <p className="text-gray-600 mb-4">{t('video1Desc')}</p>
                <YouTubeEmbed
                  videoId="QZtxvwHvNe4"
                  title={t('video1Title')}
                />
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  {t('video2Title')}
                </h3>
                <p className="text-gray-600 mb-4">{t('video2Desc')}</p>
                <YouTubeEmbed
                  videoId="8V_KWh1Uoeo"
                  title={t('video2Title')}
                />
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  {t('video3Title')}
                </h3>
                <p className="text-gray-600 mb-4">{t('video3Desc')}</p>
                <YouTubeEmbed
                  videoId="32nyPw9YUEA"
                  title={t('video3Title')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Movement Sequence */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
              5
            </span>
            {t('movementSequence')}
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center flex-1">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">
                  1
                </div>
                <h3 className="font-bold text-gray-800">{t('seq1')}</h3>
                <p className="text-sm text-gray-600">{t('seq1Desc')}</p>
              </div>
              <div className="text-green-600 text-2xl hidden md:block">→</div>
              <div className="text-center flex-1">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">
                  2
                </div>
                <h3 className="font-bold text-gray-800">{t('seq2')}</h3>
                <p className="text-sm text-gray-600">{t('seq2Desc')}</p>
              </div>
              <div className="text-green-600 text-2xl hidden md:block">→</div>
              <div className="text-center flex-1">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">
                  3
                </div>
                <h3 className="font-bold text-gray-800">{t('seq3')}</h3>
                <p className="text-sm text-gray-600">{t('seq3Desc')}</p>
              </div>
              <div className="text-green-600 text-2xl hidden md:block">→</div>
              <div className="text-center flex-1">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">
                  4
                </div>
                <h3 className="font-bold text-gray-800">{t('seq4')}</h3>
                <p className="text-sm text-gray-600">{t('seq4Desc')}</p>
              </div>
              <div className="text-green-600 text-2xl hidden md:block">→</div>
              <div className="text-center flex-1">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">
                  5
                </div>
                <h3 className="font-bold text-gray-800">{t('seq5')}</h3>
                <p className="text-sm text-gray-600">{t('seq5Desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
              6
            </span>
            {t('trainingTips')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">{t('onCourt')}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    {t('onCourt1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    {t('onCourt2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    {t('onCourt3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    {t('onCourt4')}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3">{t('offCourt')}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    {t('offCourt1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    {t('offCourt2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    {t('offCourt3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    {t('offCourt4')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('nextStep')}</h2>
          <p className="text-gray-300 mb-6">{t('nextStepDesc')}</p>
          <Link
            href="/swing"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            {t('nextStepButton')}
          </Link>
        </section>
      </div>
    </div>
  );
}
