import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function Home() {
  const t = useTranslations('home');

  const features = [
    {
      icon: t('features.grip.icon'),
      title: t('features.grip.title'),
      description: t('features.grip.description'),
      href: '/grip',
      image:
        'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop',
    },
    {
      icon: t('features.footwork.icon'),
      title: t('features.footwork.title'),
      description: t('features.footwork.description'),
      href: '/footwork',
      image:
        'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop',
    },
    {
      icon: t('features.swing.icon'),
      title: t('features.swing.title'),
      description: t('features.swing.description'),
      href: '/swing',
      image:
        'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=300&fit=crop',
    },
    {
      icon: t('features.mistakes.icon'),
      title: t('features.mistakes.title'),
      description: t('features.mistakes.description'),
      href: '/mistakes',
      image:
        'https://images.unsplash.com/photo-1530915365347-e35b8a3e8193?w=400&h=300&fit=crop',
    },
    {
      icon: t('features.practice.icon'),
      title: t('features.practice.title'),
      description: t('features.practice.description'),
      href: '/practice',
      image:
        'https://images.unsplash.com/photo-1551773188-d4f5b2e1dc4e?w=400&h=300&fit=crop',
    },
    {
      icon: t('features.pros.icon'),
      title: t('features.pros.title'),
      description: t('features.pros.description'),
      href: '/pros',
      image:
        'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=400&h=300&fit=crop',
    },
  ];

  const steps = [
    { number: '01', title: t('step1'), description: t('step1Desc') },
    { number: '02', title: t('step2'), description: t('step2Desc') },
    { number: '03', title: t('step3'), description: t('step3Desc') },
    { number: '04', title: t('step4'), description: t('step4Desc') },
    { number: '05', title: t('step5'), description: t('step5Desc') },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=1080&fit=crop"
            alt="Tennis court"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-green-700/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('heroTitle')}
            <span className="block text-green-200">{t('heroSubtitle')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/basics"
              className="bg-white text-green-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-green-50 transition-colors"
            >
              {t('startLearning')}
            </Link>
            <Link
              href="/pros"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-colors"
            >
              {t('watchProDemo')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('featuredVideos')}
            </h2>
            <p className="text-gray-600">{t('featuredVideosDesc')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <YouTubeEmbed videoId="_7xV_CE8y28" title={t('video1Title')} />
              <p className="mt-3 text-gray-600 text-center">{t('video1Title')}</p>
            </div>
            <div>
              <YouTubeEmbed videoId="rxo1uEdLouY" title={t('video2Title')} />
              <p className="mt-3 text-gray-600 text-center">{t('video2Title')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Forehand Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('whyForehand')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('whyForehandDesc')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=200&fit=crop"
                  alt="Tennis forehand"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('reason1Title')}</h3>
              <p className="text-gray-600">{t('reason1Desc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=200&fit=crop"
                  alt="Tennis power"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('reason2Title')}</h3>
              <p className="text-gray-600">{t('reason2Desc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1530915365347-e35b8a3e8193?w=400&h=200&fit=crop"
                  alt="Tennis confidence"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('reason3Title')}</h3>
              <p className="text-gray-600">{t('reason3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Players Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('learnFromPros')}
            </h2>
            <p className="text-gray-600">{t('learnFromProsDesc')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <YouTubeEmbed videoId="KLzaaln6Rf0" title={t('federerVideo')} />
              <p className="mt-3 text-gray-700 font-medium text-center">
                {t('federerVideo')}
              </p>
            </div>
            <div>
              <YouTubeEmbed videoId="x1efMTU93zQ" title={t('nadalVideo')} />
              <p className="mt-3 text-gray-700 font-medium text-center">
                {t('nadalVideo')}
              </p>
            </div>
            <div>
              <YouTubeEmbed videoId="ZU0tVNMI1qo" title={t('sinnerVideo')} />
              <p className="mt-3 text-gray-700 font-medium text-center">
                {t('sinnerVideo')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('systematicLearning')}
            </h2>
            <p className="text-gray-600">{t('systematicLearningDesc')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-green-500 transition-all"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-4 text-green-600 font-medium flex items-center">
                    {t('learnMore')}
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('learningPath')}
            </h2>
            <p className="text-gray-600">{t('learningPathDesc')}</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex-1 text-center relative">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-green-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Videos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('moreVideos')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <YouTubeEmbed videoId="u8X-i2E50Go" title={t('topspinVideo')} />
              <p className="mt-3 text-gray-600 text-center">
                {t('topspinVideo')}
              </p>
            </div>
            <div>
              <YouTubeEmbed
                videoId="i10mEr_8IVg"
                title={t('sinnerSlingshotVideo')}
              />
              <p className="mt-3 text-gray-600 text-center">
                {t('sinnerSlingshotVideo')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=1920&h=600&fit=crop"
            alt="Tennis"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-gray-300 mb-8">{t('ctaDesc')}</p>
          <Link
            href="/basics"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-500 transition-colors"
          >
            {t('startNow')}
          </Link>
        </div>
      </section>
    </div>
  );
}
