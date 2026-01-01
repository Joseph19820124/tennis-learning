import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = getAllPosts(locale);

  const categoryColors: Record<string, string> = {
    forehand: 'bg-green-100 text-green-800',
    backhand: 'bg-blue-100 text-blue-800',
    serve: 'bg-purple-100 text-purple-800',
    practice: 'bg-orange-100 text-orange-800',
    equipment: 'bg-gray-100 text-gray-800',
    default: 'bg-green-100 text-green-800',
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=600&fit=crop"
            alt="Tennis blog"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-xl text-green-100">{t('heroDesc')}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">{t('noPosts')}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.coverImage || 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        categoryColors[post.category] || categoryColors.default
                      }`}
                    >
                      {t(`categories.${post.category}`)}
                    </span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-4 text-green-600 font-medium text-sm">
                    {t('readMore')} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
