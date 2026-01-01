'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function SwingPage() {
  const t = useTranslations('swing');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=1920&h=600&fit=crop"
            alt="Tennis swing motion"
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('videoTutorial')}</h2>
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

        {/* Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('overview')}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {t('overviewDesc')}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">1. {t('phase1')}</span>
              <span className="text-gray-400">→</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">2. {t('phase2')}</span>
              <span className="text-gray-400">→</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">3. {t('phase3')}</span>
              <span className="text-gray-400">→</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">4. {t('phase4')}</span>
            </div>
          </div>
        </section>

        {/* Phase 1: Preparation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg mr-3">1</span>
            {t('preparation')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">{t('prepPoints')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-600">{t('prep1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-600">{t('prep2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-600">{t('prep3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5">4</span>
                    <span className="text-gray-600">{t('prep4')}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold text-yellow-800 mb-2">{t('prepTip')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('prepTipDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2: Backswing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg mr-3">2</span>
            {t('backswing')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop"
                  alt="Tennis backswing"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-gray-700">
                  {t('backswingDesc')}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{t('shoulderRotation')}</h3>
                <p className="text-gray-600">
                  {t('shoulderRotationDesc')}
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{t('armPath')}</h3>
                <p className="text-gray-600">
                  {t('armPathDesc')}
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{t('weightTransfer')}</h3>
                <p className="text-gray-600">
                  {t('weightTransferDesc')}
                </p>
              </div>
            </div>

            <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-bold text-red-800 mb-2">{t('backswingErrors')}</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• {t('backswingError1')}</li>
                <li>• {t('backswingError2')}</li>
                <li>• {t('backswingError3')}</li>
                <li>• {t('backswingError4')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phase 3: Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg mr-3">3</span>
            {t('contact')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Slow Motion Video */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">{t('slowMotion')}</h3>
              <YouTubeEmbed videoId="WPY0s9FQA4g" title={t('slowMotion')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('slowMotionDesc')}</p>
            </div>

            <p className="text-gray-700 mb-6">
              {t('contactDesc')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">{t('kineticChain')}</h3>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">1</span>
                    {t('chain1')}
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                    {t('chain2')}
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">3</span>
                    {t('chain3')}
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">4</span>
                    {t('chain4')}
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">5</span>
                    {t('chain5')}
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-3">{t('idealContact')}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{t('contactFront')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{t('contactSide')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{t('contactHeight')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{t('contactAngle')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">{t('contactMoment')}</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">{t('eyes')}</h4>
                  <p className="text-gray-600">{t('eyesDesc')}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">{t('gripMoment')}</h4>
                  <p className="text-gray-600">{t('gripMomentDesc')}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">{t('wrist')}</h4>
                  <p className="text-gray-600">{t('wristDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 4: Follow Through */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg mr-3">4</span>
            {t('followThrough')}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Pro Analysis Video */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">{t('federerAnalysis')}</h3>
              <YouTubeEmbed videoId="2lLCIzntsXk" title={t('federerAnalysis')} />
              <p className="mt-2 text-gray-600 text-center text-sm">{t('federerDesc')}</p>
            </div>

            <p className="text-gray-700 mb-6">
              {t('followThroughDesc')}
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('racketPath')}</h3>
                  <p className="text-gray-600">
                    {t('racketPathDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('bodyRotation')}</h3>
                  <p className="text-gray-600">
                    {t('bodyRotationDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('balanceRecovery')}</h3>
                  <p className="text-gray-600">
                    {t('balanceRecoveryDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-gray-800">{t('recoveryPrep')}</h3>
                  <p className="text-gray-600">
                    {t('recoveryPrepDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">{t('followThroughTypes')}</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">{t('traditionalFollow')}</h4>
                  <p className="text-gray-600">{t('traditionalFollowDesc')}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">{t('windshieldFollow')}</h4>
                  <p className="text-gray-600">{t('windshieldFollowDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Swing Checklist */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('checklist')}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-green-600 mb-3">{t('correctActions')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('correct1')}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('correct2')}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('correct3')}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('correct4')}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('correct5')}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('correct6')}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-600 mb-3">{t('avoidErrors')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    {t('avoid1')}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    {t('avoid2')}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    {t('avoid3')}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    {t('avoid4')}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    {t('avoid5')}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    {t('avoid6')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('nextStep')}</h2>
          <p className="text-gray-300 mb-6">
            {t('nextStepDesc')}
          </p>
          <Link
            href="/mistakes"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            {t('nextStepButton')}
          </Link>
        </section>
      </div>
    </div>
  );
}
